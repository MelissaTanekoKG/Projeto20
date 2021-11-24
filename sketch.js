var bgImg;
var cat, catImg1, catImg2, catmImg3;
var mouse, mouseImg1, mouseImg2;
function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    cat = createSprite(870, 600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2
    
    mouse = createSprite(40,600);
    mouse.addAnimation(mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.X - mouse.X < (cat.Width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("UltimaImagemGato", catImg3);
        cat.changeAnimation("ultimaImagemGato");
        cat.X = 300;
        cat.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

 if(keyCode === LEFT_ARROW){
     mouse.addAnimation("ratoProvocando", mouseImg2);
     mouse.changeAnimation("ratoProvocando");
     mouse,frameDelay = 25

     cat.velocityX = -5;
 }
}
