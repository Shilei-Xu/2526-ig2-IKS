let fontText;
let fontUI;

function preload() {
  images.bg_f1 = loadImage("assets/Backgrounds/Feld_Nachmittag.png");
  images.bg_f2 = loadImage("assets/Backgrounds/Feld_Tag.png");
  images.bg_h1 = loadImage("assets/Backgrounds/Höhle_Nacht_Feuer.png");
  images.bg_h2 = loadImage("assets/Backgrounds/Höhle_Nacht.png");
  images.bg_h3 = loadImage("assets/Backgrounds/Höhle_Tag.png");

  images.Bun_1 = loadImage("assets/Bunnies/bunny_1_bush.png");
  images.Bun_2 = loadImage("assets/Bunnies/bunny_1.png");
  images.Bun_3 = loadImage("assets/Bunnies/bunny_2_bush.png");
  images.Bun_4 = loadImage("assets/Bunnies/bunny_2.png");
  images.Bun_5 = loadImage("assets/Bunnies/bunny_3_bush.png");
  images.Bun_6 = loadImage("assets/Bunnies/bunny_3.png");

  images.homo_1 = loadImage("assets/Homo_Sapiens/waving_hello_2.png");
  images.homo_2 = loadImage("assets/Homo_Sapiens/waving_hello.png");
  images.homo_3 = loadImage("assets/Homo_Sapiens/sitting_homo_sapiens_happy_end.png");
  images.homo_4 = loadImage("assets/Homo_Sapiens/seeking_trails.png");
  images.homo_5 = loadImage("assets/Homo_Sapiens/painting_woman.png");
  images.homo_6 = loadImage("assets/Homo_Sapiens/painting_man.png");
  images.homo_7 = loadImage("assets/Homo_Sapiens/hiding.png");
  images.homo_8 = loadImage("assets/Homo_Sapiens/crouching_crafting.png");
  images.homo_9 = loadImage("assets/Homo_Sapiens/back_with_bow.png");

  images.ui_1 = loadImage("assets/UI/text_leather_small.png");
  images.ui_2 = loadImage("assets/UI/text_leather_large.png");
  images.ui_3 = loadImage("assets/UI/ui_1.png");
  images.ui_4 = loadImage("assets/UI/ui_2.png");
  images.ui_5 = loadImage("assets/UI/ui_3.png");
  


  images.lay_1 = loadImage("assets/Lay/layouts_1.png");
  images.lay_2 = loadImage("assets/Lay/layouts_2.png");

  fontText = loadFont("assets/fonts/GamjaFlower-Regular.ttf");
  fontUI = loadFont("assets/fonts/FreckleFace-Regular.ttf");

}

function setup() {
  createCanvas(1920, 1080);
  pixelDensity(window.devicePixelRatio); // 或 pixelDensity(2);
  textFont(fontText); // 默认正文
  
  textSize(36); fill(0);
}

function drawUIFrame() {
  push();
  noStroke();
  fill(255, 200);
  rect(
    60, 730, 400, 300, 24
  );
  pop();
}

function draw() {
  background(0);
  let page = pages[currentPage];
  if (images[page.bg]) image(images[page.bg], 0, 0);
  drawUIFrame();

  switch (page.layout) {
    case "talk": drawTalkLayout(page); break;
    case "solo": drawSoloLayout(page); break;
    case "scene": drawSceneLayout(page); break;
    case "explore": drawExploreLayout(page); break;
    case "special": drawSpecialLayout(page); break;
  }
}
