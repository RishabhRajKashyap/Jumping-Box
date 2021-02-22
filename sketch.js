var canvas;
var music;
var box;
var block2;
var surface1, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 surface1 = createSprite(50, 550, 50, 40);
 surface1.shapeColor = "yellow";

 surface3 = createSprite(100, 550, 50, 40);
 surface3.shapeColor = "green";

 surface4 = createSprite(150, 550, 50, 40);
 surface4.shapeColor = "";

 surface1 = createSprite(50, 550, 50, 40);
 surface1.shapeColor = "";

    //create box sprite and give velocity
    box = createSprite(random(20, 750));
    box.shapeColor = "red";

}

function draw() {

music.play();

    background(rgb(169,169,169));

    //create edgeSprites();
createEdgeSprites();
box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        surface1.shapeColor = "red";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red";
        surface3.shapeColor = "blue";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "green";
        surface4.shapeColor = "red";
    }

    if(block2.isTouching(box)){
        box.collide(block2);
        box.shapeColor = rgb(255, 128, 0);
        box.velocityX = 0;
        music.stop();
    }

    drawSprites();
}