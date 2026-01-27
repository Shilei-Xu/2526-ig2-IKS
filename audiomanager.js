let bgm = {};
let currentBGM = null;
let currentChapter = null;

function preloadBGM() {
  bgm[1] = loadSound("assets/audio/ch1.mp3");
  bgm[2] = loadSound("assets/audio/ch2.mp3");
  bgm[3] = loadSound("assets/audio/ch2.mp3");
  bgm[4] = loadSound("assets/audio/ch2.mp3");
  bgm[5] = loadSound("assets/audio/ch5.mp3");
}

function playChapterBGM(chapterNumber) {
  userStartAudio();

  if (currentChapter === chapterNumber) return;

  if (currentBGM && currentBGM.isPlaying()) {
    currentBGM.stop();
  }

  currentChapter = chapterNumber;
  currentBGM = bgm[chapterNumber];
  currentBGM.setVolume(0.5);
  currentBGM.loop();
}
