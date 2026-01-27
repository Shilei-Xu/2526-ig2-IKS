let selectedOptionIndex = -1;

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
  

 

  // 🌟 章节快捷键（优先级最高）
  if (key === '1') { goToChapter(1); return; }
  if (key === '2') { goToChapter(2); return; }
  if (key === '3') { goToChapter(3); return; }
  if (key === '4') { goToChapter(4); return; }
  if (key === '5') { goToChapter(5); return; }

  let page = pages[currentPage];


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

  // 播放视频逻辑
   if (page.layout === "video" && page.video) {
    if (key === page.keys.playVideo) {
        let v = videos[page.video.key];
        if (v) {
            userStartAudio(); // 🔓 解锁音频
            v.play();
            v.volume(0);
        }
    }
}

}


function nextPage() {
  if (currentPage < pages.length - 1) { currentPage++; resetText(); }
}

function prevPage() {
  if (currentPage > 0) { currentPage--; resetText(); }
}


