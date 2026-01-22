function goToPage(id) {
  let index = pages.findIndex(p => p.id === id);
  if (index !== -1) {
    currentPage = index;
    resetText();
  } else {
    console.warn("找不到页面 id:", id);
  }
}

function keyPressed() {
  let page = pages[currentPage];
  let keys = page.keys || {};

  if (key === keys.next && keys.nextId) {
    goToPage(keys.nextId);
  }

  if (key === keys.prev && keys.prevId) {
    goToPage(keys.prevId);
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) { currentPage++; resetText(); }
}

function prevPage() {
  if (currentPage > 0) { currentPage--; resetText(); }
}


