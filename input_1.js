let selectedOptionIndex = -1;
let mediaUnlocked = false;      // 用户交互解锁
let playedPages = {};           // 记录每个 page.video.key 是否已播放过


function goToPage(id) {
  let index = pages.findIndex(p => p.id === id);

  if (index !== -1) {
    currentPage = index;
    resetText();

    let chapterNumber = int(id.split("-")[0]); // "02-01" → 2
    playChapterBGM(chapterNumber);             // 🎵 自动切章节音乐

    if (pages[currentPage].layout === "choice") {
      selectedOptionIndex = -1;
    }
    // ⭐⭐⭐ 加在这里：video 页面自动播放 ⭐⭐⭐

    let page = pages[currentPage]; // 获取当前页面对象
    if (page.layout === "video" && page.video) {
      let v = videos[page.video.key];
      if (mediaUnlocked && v && v.elt) {
        v.time(0);
        v.play();
        v.volume(0);
      }
    }

  } else {
    console.warn("找不到页面 id:", id);
  }
}


function goToChapter(chapterNumber) {

  playChapterBGM(chapterNumber);   // 🎵 切音乐

  if (chapterNumber === 1) goToPage("01-01");
  if (chapterNumber === 2) goToPage("02-01");
  if (chapterNumber === 3) goToPage("03-01");
  if (chapterNumber === 4) goToPage("04-01");
  if (chapterNumber === 5) goToPage("05-01");
}


function keyPressed() {
  // ✅ 第一次用户按键解锁媒体
  if (!mediaUnlocked) {
    mediaUnlocked = true;
    console.log("媒体解锁 ✅");
  }


  // 🌟 章节快捷键（优先级最高）
  if (key === '1') { goToChapter(1); return; }
  if (key === '2') { goToChapter(2); return; }
  if (key === '3') { goToChapter(3); return; }
  if (key === '4') { goToChapter(4); return; }
  if (key === '5') { goToChapter(5); return; }

  let page = pages[currentPage];

  // 🌟 新增 whack3Keys 页面逻辑
  if (page.layout === "hunt") {
    const keyMap = page.keys.keyMap; // ["A","S","D"]
    const index = keyMap.findIndex(k => k.toUpperCase() === key.toUpperCase());

    if (index !== -1) {
      const opt = page.options[index];
      if (opt && opt.isPeek) {
        // 命中 → 立即翻页
        goToPage(page.keys.nextId);
      } else {
        // 没命中 → 可选反馈
        console.log("Miss! Try again!");
      }
    }
    return; // ⚠️ 命中或未命中都不执行原有翻页逻辑
  }


  // 🌟 如果是 choice 页面，优先处理 1/2/3 选择
  if (page.layout === "choice" && page.options) {
    for (let i = 0; i < page.options.length; i++) {
      if (key === page.options[i].selectKey) {
        selectedOptionIndex = i;
        return; // ⚠️ 选项页不再继续执行翻页逻辑
      }
    }
  }

  // ===== 原本的翻页逻辑（保持不变）=====
  let keys = page.keys || {};

  if (key === keys.next && keys.nextId) {
    goToPage(keys.nextId);
  }

  if (key === keys.prev && keys.prevId) {
    goToPage(keys.prevId);
  }

  // 播放视频逻辑（放在 keyPressed / page enter）
  /* if (page.layout === "video" && page.video) {
    let vkey = page.video.key;
    let v = videos[vkey];

    if (mediaUnlocked && v && v.elt && v.elt.paused) {
      userStartAudio();   // 🔓

      v.time(0);   // ⭐ 加这一行
      v.play();
      v.volume(0);
    }
  } */

}


function nextPage() {
  if (currentPage < pages.length - 1) { currentPage++; resetText(); }
}

function prevPage() {
  if (currentPage > 0) { currentPage--; resetText(); }
}


