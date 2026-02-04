function drawImageContain(img, x, y, maxW, maxH, scale = 1) {
    let baseScale = min(maxW / img.width, maxH / img.height);
    let s = baseScale * scale;

    let w = img.width * s;
    let h = img.height * s;

    image(img, x, y, w, h);
}

// 1.对话布局
function drawTalkLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;

    // UI底板
    drawImageContain(images.ui_1, 470, 700, 1000, 800, 1.4);

    // 👇 多角色绘制
    // 👇 统一的角色绘制入口
    let charList = [];

    // 新结构：多个角色
    if (page.characters) {
        charList = page.characters;
    }
    // 旧结构：单个角色（兼容老页面）
    else if (page.character) {
        charList = [page.character];
    }

    // 开始画
    charList.forEach((c, index) => {
        if (!images[c.key]) return;

        let charX = c.x;
        let charY = c.y + (c.breathe ? breatheY : 0);

        let finalScale = c.scale;

        // 👇 pop 入场动画
        if (c.pop) {
            let id = page.id + "_" + index;

            if (!popAnimations[id]) {
                popAnimations[id] = new PopAnimator(500, 1.25);
            }

            finalScale *= popAnimations[id].getScale();
        }

        drawImageContain(
            images[c.key],
            charX,
            charY,
            c.maxW,
            c.maxH,
            finalScale
        );
    });

    // 👇 可选高光圆圈（呼吸闪烁）
    if (page.highlights) {
        push();
        noStroke();

        page.highlights.forEach((h, i) => {
            // 用正弦做 alpha 呼吸闪烁
            let alpha = h.color[3] * (0.5 + 0.5 * sin(t * 1));
            fill(h.color[0], h.color[1], h.color[2], alpha);
            circle(h.x, h.y, h.r);
        });

        pop();
    }
    // 文字
    if (page.textMode === "instant") {
        text(page.text, 750, 820, 980);
    } else {
        drawTypewriter(page.text, 750, 820, 980);
    }

    // 下一页箭头
    //drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);

    // 下一页箭头，根据 page.ui 来选择
    let arrowKey = page.ui === "end" ? "ui_5" : "ui_3";  // ui_3 原来的普通箭头
    drawImageContain(images[arrowKey], 1600, 830, 150, 150, 1.4);

}


// 2.章节标题 ✅
function drawSoloLayout(page) {
    if (!page.texts) return;

    push();
    textAlign(CENTER, TOP);

    // --- 1️⃣ 装饰横线 ---
    stroke('#FFEDB2'); // 浅黄色，带透明
    strokeWeight(6);            // 粗细
    line(400, 250, 600, 250); // 横线，从画布左 400 到右 400
    line(width - 600, 250, width - 400, 250); // 
    line(400, 700, 600, 700); // 再画一条横线
    line(width - 600, 700, width - 400, 700); // 
    // --- 2️⃣ 装饰圆圈 ---
    noStroke();                  // 填充圆
    fill('#FFEDB2');    // 浅黄色带点透明
    ellipse(700, 250, 30, 30);   // 圆心 (200,360)，直径30
    ellipse(width - 700, 250, 30, 30); // 右侧对称圆
    // --- 2️⃣ 装饰圆圈 ---
    noFill();
    stroke('#FFEDB2'); // 浅黄色，带透明
    strokeWeight(3);
    ellipse(700, 250, 50, 50);   // 圆心 (200,360)，直径30
    ellipse(width - 700, 250, 50, 50);

    push();
    noStroke();
    for (let t of page.texts) {
        textFont(t.font === "ui" ? fontUI : fontText);
        textSize(t.size || 28);

        if (t.color) fill(...t.color);
        else fill('#FFEDB2');

        text(
            t.content,
            width / 2,     // x 居中
            t.y || 200,    // y
        );
    }
    pop();
    pop();
}

// 3.信息布局
function drawInfoLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;   // 2px 的轻微上下浮动

    drawImageContain(images.ui_2, 980, 50, 1000, 800, 1.2);
    drawImageContain(images.homo_2, 860, 500, 400, 400, 1.3);

    // 人物：可在 page 对象里配置
    if (page.character && images[page.character.key]) {
        let charX = page.character.x;
        let charY = page.character.y;

        if (page.character.breathe) {
            charY += breatheY;  // 启用浮动
        }

        drawImageContain(
            images[page.character.key],
            charX,
            charY,
            page.character.maxW,
            page.character.maxH,
            page.character.scale
        );

        //文字打字机或静止
        if (page.textMode === "instant") {
            text(page.text, 1100, 220, 600);
        } else {
            drawTypewriter(page.text, 1100, 220, 600);
        }
        //箭头
        //drawImageContain(images.ui_3, 1500, 750, 150, 150, 1.4);

        // 下一页箭头，根据 page.ui 来选择
        let arrowKey = page.ui === "end" ? "ui_5" : "ui_3";  // ui_3 原来的普通箭头
        drawImageContain(images[arrowKey], 1500, 750, 150, 150, 1.4);
    }
}

// 4.选择布局
function drawChoiceLayout(page) {

    for (let i = 0; i < page.options.length; i++) {
        const opt = page.options[i];

        // 底图
        drawImageContain(
            images[opt.key],
            opt.x,
            opt.y,
            opt.w,
            opt.h,
            1
        );

        // 如果被选中，叠加高亮图
        if (selectedOptionIndex === i && opt.highlightKey) {
            drawImageContain(
                images[opt.highlightKey],
                opt.x,
                opt.y,
                opt.w,
                opt.h,
                1
            );
        }
    }
    //drawImageContain(images.ui_6, 1630, 860, 200, 100, 1.2);
    //drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);

    if (page.showArrows !== false) {
    drawImageContain(images.ui_6, 1630, 860, 200, 100, 1.2);
    drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);
}
}

// 5.尼人对话布局
function drawDialogLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;   // 2px 的轻微上下浮动

    drawImageContain(images.nean_4, 750 + breatheY, 250, 500, 400, 1);
    drawImageContain(images.homo_9, 950 - breatheY, 400, 800, 400, 1.5);
    drawImageContain(images.ui_1, 1300, 700, 1000, 800, 0.5);
    drawImageContain(images.ui_1, 1300, 550, 1000, 800, 0.5);
    drawImageContain(images.ui_1, 100, 200, 800, 800, 0.8);

    //3个文本框
    push();
    textAlign(LEFT, TOP);
    textSize(28);
    fill(0); // 按你的画面风格调整

    // 上框
    text(page.texts.top || "", 150, 250, 800, 800,);

    // 中框
    text(page.texts.middle || "", 1330, 580, 1000, 800);

    // 下框
    text(page.texts.bottom || "", 1330, 750, 1000, 800);
    pop();

}

// 6.纯画面布局
function drawDisplayLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;   // 2px 的轻微上下浮动
    if (page.images && page.images.length > 0) {
        for (let img of page.images) {
            if (!images[img.key]) continue;

            let yOffset = 0;
            if (img.breathe) yOffset = breatheY;

            drawImageContain(
                images[img.key],
                img.x,
                img.y + yOffset,
                img.maxW,
                img.maxH,
                img.scale || 1
            );
        }
    }
    if (page.showArrows !== false) {
    drawImageContain(images.ui_6, 1630, 860, 200, 100, 1.2);
    drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);
}

}

// 7.视频布局

function drawVideoLayout(videoData) {
    if (!videoData) return;

    let v = videos[videoData.key];
    if (v && videos.introReady) {
        image(v, videoData.x, videoData.y, videoData.width, videoData.height);
    }

    drawUIFrame();
    drawImageContain(images.ui_6, 1630, 860, 200, 100, 1.2);
    drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);
}


//8.打兔子布局

function drawHuntLayout(page) {
    if (!page || !page.options || !Array.isArray(page.options)) return;

    const t = millis();

    page.options.forEach(opt => {
        // 1️⃣ 底图永远画
        if (images[opt.key]) {
            drawImageContain(images[opt.key], opt.x, opt.y, opt.w, opt.h, 1);
        }

        // 2️⃣ 初始化随机参数（只做一次）
        if (opt._phase === undefined) {
            opt._period = 3000 + Math.random() * 1500;          // 每个兔子周期随机 1.5~3 秒
            opt._highlightDuration = 300 + Math.random() * 500; // 高亮持续时间随机 0.5~1 秒
            opt._phase = Math.random() * opt._period;          // 初始偏移随机
        }

        // 3️⃣ 计算每个兔子的独立高亮状态
        const localTime = (t + opt._phase) % opt._period;
        const isPeek = localTime < opt._highlightDuration;
        opt.isPeek = isPeek;

        // 4️⃣ 高亮叠加
        if (isPeek && images[opt.highlightKey]) {
            drawImageContain(images[opt.highlightKey], opt.x, opt.y, opt.w, opt.h, 1);
        }
    });
}

//9.neanderthal info layout
function drawInfoNeLayout(page) {
    let t = millis() * 0.003;
    let breatheY = sin(t * 0.8) * 2;

    // ===== 背景 UI =====
    drawImageContain(images.ui_2, 80, 50, 1000, 800, 1.2);
    drawImageContain(images.ui_2, 980, 50, 1000, 800, 1.2);
    drawImageContain(images.nean_3, 850, 500, 400, 400, 1.3);
    drawImageContain(images.homo_2, 600, 500, 400, 400, 1.3);
    // ===== 角色 1 =====
    if (page.character1 && images[page.character1.key]) {
        let y1 = page.character1.y + (page.character1.breathe ? breatheY : 0);

        drawImageContain(
            images[page.character1.key],
            page.character1.x,
            y1,
            page.character1.maxW,
            page.character1.maxH,
            page.character1.scale
        );
    }

    // ===== 角色 2 =====
    if (page.character2 && images[page.character2.key]) {
        let y2 = page.character2.y + (page.character2.breathe ? breatheY : 0);

        drawImageContain(
            images[page.character2.key],
            page.character2.x,
            y2,
            page.character2.maxW,
            page.character2.maxH,
            page.character2.scale
        );
    }

    // ===== 文字框 1 =====
    if (page.text1) {
        if (page.textMode1 === "instant") {
            text(page.text1, page.textBox1.x, page.textBox1.y, page.textBox1.w);
        } else {
            drawTypewriter(page.text1, page.textBox1.x, page.textBox1.y, page.textBox1.w);
        }
    }

    // ===== 文字框 2 =====
    if (page.text2) {
        if (page.textMode2 === "instant") {
            text(page.text2, page.textBox2.x, page.textBox2.y, page.textBox2.w);
        } else {
            drawTypewriter(page.text2, page.textBox2.x, page.textBox2.y, page.textBox2.w);
        }
    }

    // ===== 箭头 =====
    drawImageContain(images.ui_3, 1500, 750, 150, 150, 1.4);
}

//10.开屏布局
function drawSolo2Layout(page) {
    if (!page.texts) return;

    push();
    textAlign(CENTER, TOP);



    push();
    noStroke();
    for (let t of page.texts) {
        textFont(t.font === "ui" ? fontUI : fontText);
        textSize(t.size || 28);

        if (t.color) fill(...t.color);
        else fill('#FFEDB2');

        text(
            t.content,
            width / 2,     // x 居中
            t.y || 200,    // y
        );
    }
    pop();
    pop();
}
