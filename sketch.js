var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,580,360,30);
    block1.shapeColor="yellow";
    block2=createSprite(295,580,200,30);
    block2.shapeColor="green";
    block3=createSprite(515,580,200,30);
    block3.shapeColor="red";
    block4=createSprite(740,580,220,30);
    block4.shapeColor="blue";
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=9;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    if(block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColor="yellow";
        music.play();
    }
    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor="green";
        box.velocityX=0;
        box.velocityY=9;
        music.stop();
    }
    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor="red";
        music.play();
    }
    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor="blue";
        music.play();
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
