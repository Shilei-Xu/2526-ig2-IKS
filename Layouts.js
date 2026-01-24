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
    let breatheY = sin(t * 0.8) * 2;   // 2px 的轻微上下浮动

    drawImageContain(images.ui_1, 470, 700, 1000, 800, 1.4);

    //drawImageContain(images.homo_2, 450 + breatheY, 430, 400, 400, 1.5);

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
            text(page.text, 750, 820, 980);
        } else {
            drawTypewriter(page.text, 750, 820, 980);
        }
        //箭头
        drawImageContain(images.ui_3, 1600, 830, 150, 150, 1.4);
    }
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
        drawImageContain(images.ui_3, 1500, 750, 150, 150, 1.4);
    }
}

// 4.选择布局
function drawChoiceLayout(page) {
    console.log("drawing choice layout", page.id);
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
    textAlign(LEFT, TOP);
    textSize(28);
    fill(0); // 按你的画面风格调整

    // 上框
    text(page.texts.top || "", 150, 250, 800, 800,);

    // 中框
    text(page.texts.middle || "", 1330, 580, 1000, 800);

    // 下框
    text(page.texts.bottom || "", 1330, 750, 1000, 800);

}

function drawExploreLayout(page) {
    image(images.homo_1, 600, 500);
    textSize(36);
    text(page.text, 200, 200, 1600, 200);
}
