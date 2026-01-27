let fontText;
let fontUI;
let pages = [];
let currentPage = 0;
let images = {};
let videos = {}; // 全局存视频对象


function preload() {
  images.bg_f1 = loadImage("assets/Backgrounds/Feld_Nachmittag.png");
  images.bg_f2 = loadImage("assets/Backgrounds/Feld_Tag.png");
  images.bg_h1 = loadImage("assets/Backgrounds/Höhle_Nacht_Feuer.png");
  images.bg_h2 = loadImage("assets/Backgrounds/Höhle_Nacht.png");
  images.bg_h3 = loadImage("assets/Backgrounds/Höhle_Tag.png");
  images.bg_w1 = loadImage("assets/Backgrounds/Wald.png");

  images.Bun_1 = loadImage("assets/Bunnies/bunny_1_bush.png");
  images.Bun_2 = loadImage("assets/Bunnies/bunny_1.png");
  images.Bun_3 = loadImage("assets/Bunnies/bunny_2_bush.png");
  images.Bun_4 = loadImage("assets/Bunnies/bunny_2.png");
  images.Bun_5 = loadImage("assets/Bunnies/bunny_3_bush.png");
  images.Bun_6 = loadImage("assets/Bunnies/bunny_3.png");

  images.trap_1 = loadImage("assets/Bunnies/trap1.png");
  images.trap_2 = loadImage("assets/Bunnies/trap2.png");
  images.trap_3 = loadImage("assets/Bunnies/trap3.png");

  images.homo_1 = loadImage("assets/Homo_Sapiens/waving_hello_2.png");
  images.homo_2 = loadImage("assets/Homo_Sapiens/waving_hello.png");
  images.homo_3 = loadImage("assets/Homo_Sapiens/sitting_homo_sapiens_happy_end.png");
  images.homo_4 = loadImage("assets/Homo_Sapiens/seeking_trails.png");
  images.homo_5 = loadImage("assets/Homo_Sapiens/painting_woman.png");
  images.homo_6 = loadImage("assets/Homo_Sapiens/painting_man.png");
  images.homo_7 = loadImage("assets/Homo_Sapiens/hiding.png");
  images.homo_8 = loadImage("assets/Homo_Sapiens/crouching_crafting.png");
  images.homo_9 = loadImage("assets/Homo_Sapiens/back_with_bow.png");

  images.nean_1 = loadImage("assets/Neanderthals/sitting_neanderthal_happy_end.png");
  images.nean_2 = loadImage("assets/Neanderthals/neanderthal_3.png");
  images.nean_3 = loadImage("assets/Neanderthals/neanderthal_2.png");
  images.nean_4 = loadImage("assets/Neanderthals/neanderthal_1.png");
  images.nean_5 = loadImage("assets/Neanderthals/conflict.png");

  images.ui_1 = loadImage("assets/UI/text_leather_small.png");
  images.ui_2 = loadImage("assets/UI/text_leather_large.png");
  images.ui_3 = loadImage("assets/UI/ui_1.png");
  images.ui_4 = loadImage("assets/UI/ui_2.png");
  images.ui_5 = loadImage("assets/UI/ui_3.png");

  images.obj_1 = loadImage("assets/Objects/twig_1.png");
  images.hlobj_1 = loadImage("assets/Objects/selected/twig_1_selected.png");
  images.obj_2 = loadImage("assets/Objects/twig_2.png");
  images.hlobj_2 = loadImage("assets/Objects/selected/twig_2_selected.png");
  images.obj_3 = loadImage("assets/Objects/twig_3.png");
  images.hlobj_3 = loadImage("assets/Objects/selected/twig_3_selected.png");
  images.obj_4 = loadImage("assets/Objects/charcoal.png");
  images.hlobj_4 = loadImage("assets/Objects/selected/charcoal_selected.png");
  images.obj_5 = loadImage("assets/Objects/limestone_chalk.png");
  images.hlobj_5 = loadImage("assets/Objects/selected/limestone_chalk_selected.png");
  images.obj_6 = loadImage("assets/Objects/ocre.png");
  images.hlobj_6 = loadImage("assets/Objects/selected/ocre_selected.png");

  images.lay_1 = loadImage("assets/Lay/layouts_1.png");
  images.lay_2 = loadImage("assets/Lay/layouts_2.png");

  fontText = loadFont("assets/fonts/GamjaFlower-Regular.ttf");
  fontUI = loadFont("assets/fonts/FreckleFace-Regular.ttf");

  videos.intro = createVideo("assets/Video/Animation_Höhle.mp4");
  videos.intro.hide();      // 隐藏 DOM 元素，只用 canvas 绘制
  videos.intro.loop();      // 循环播放
  videos.intro.volume(0); // 静音
  videos.intro.speed(2);
}

function setup() {
  createCanvas(1920, 1080);
  pixelDensity(window.devicePixelRatio); // or pixelDensity(2);
  textFont(fontText); // text

  pages = [
    ...pages_01,
    ...pages_02,
    ...pages_03,
    ...pages_04,
    ...pages_05
  ];

  textSize(36); fill(0);
}

function drawUIFrame() {
  push();
  noStroke();
  fill(254, 236, 190, 220);
  rect(
    60, 730, 400, 300, 24
  );
  pop();
}


function draw() {
  background(0);
  image(videos.intro, 0, 0, width, height);
  let page = pages[currentPage];
  // if (images[page.bg]) image(images[page.bg], 0, 0);

  if (images[page.bg]) {
    let img = images[page.bg];
    let scale = max(width / img.width, height / img.height);
    scale *= page.bgScale || 1;

    let w = img.width * scale;
    let h = img.height * scale;

    let x = (width - w) / 2 + (page.bgOffset?.x || 0);
    let y = (height - h) / 2 + (page.bgOffset?.y || 0);

    image(img, x, y, w, h);
  }

  drawUIFrame();
  switch (page.layout) {
    case "talk": drawTalkLayout(page); break;
    case "solo": drawSoloLayout(page); break;
    case "info": drawInfoLayout(page); break;
    case "choice": drawChoiceLayout(page); break;
    case "dialog": drawDialogLayout(page); break;
    case "display": drawDisplayLayout(page); break;
    case "video": drawVideoLayout(page.video); break;
  }
}
