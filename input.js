let selectedOptionIndex = -1;

function goToPage(id) {
  let index = pages.findIndex(p => p.id === id);
  if (index !== -1) {
    currentPage = index;
    resetText();

    // ⭐ 如果新页面是 choice，重置选择
    if (pages[currentPage].layout === "choice") {
      selectedOptionIndex = -1; // 或 0 作为默认选中
    }
  } else {
    console.warn("找不到页面 id:", id);
  }
}

function keyPressed() {
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
    if (currentPage.layout === "video" && currentPage.video) {
        if (key === currentPage.keys.playVideo) {
            let v = videos[currentPage.video.key];
            if (v) {
                v.play();        // 开始播放
                v.volume(1);     // 可选：恢复声音
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


