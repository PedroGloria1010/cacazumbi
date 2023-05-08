var zumbi, fundo, atirador, coracao;
var backImg, coracaoImg, coracao2Img, coracao3Img, atirador, atirador2Img, atirador3Img, zumbiImg;

function preload() {
    backImg = loadImage("assets/bg.jpeg")
    coracao1Img = loadImage("assets/heart_1.png")
    coracao2Img = loadImage("assets/heart_2.png")
    coracao3Img = loadImage("assets/heart_3.png")
    atirador1Img = loadImage("assets/shooter_1.png")
    atirador2Img = loadImage("assets/shooter_2.png")
    atirador3Img = loadImage("assets/shooter_3.png")
    zumbiImg = loadImage("assets/zombie.png")

}

function setup() {


    createCanvas(windowWidth, windowHeight);


    //adicione a imagem de fundo
    fundo = createSprite(displayWidth / 2 + 50, displayHeight / 2 + 40, 20, 20);
    fundo.addImage(backImg);
    fundo.scale = 1.3;

    //crie o sprite do jogador
    atirador.createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
    atirador.addImage(shooterImg)
    atirador.scale = 0.3
    atirador.debug = true
    atirador.setCollider("rectangle", 0, 0, 300, 300)



}

function draw() {
    background(0);

    //mova o jogador para cima e para baixo e torne o jogo compatível com dispositivos móveis usando touches (toques)
    if (keyDown("UP_ARROW") || touches.length > 0) {
        atirador.y = atirador.y - 30
    }
    if (keyDown("DOWN_ARROW") || touches.length > 0) {
        atirador.y = atirador.y + 30
    }

    //libere as balas e mude a imagem do atirador para a posição de tiro quando a tecla espaço for pressionada
    if (keyWentDown("space")) {

        atirador.addImage(shooter_shooting)
    }
    //o jogador volta à imagem original quando pararmos de pressionar a tecla espaço
    else if (keyWentUp("space")) {
        atirador.addImage(shooterImg)
    }

    drawSprites();


}