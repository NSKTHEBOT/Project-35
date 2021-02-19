
var Body;
var NIKUNJDB;
var Position;
var Positionpre;
var backgrounds,backgroundsimg;
function setup(){
    createCanvas(1000,600);

    NIKUNJDB=firebase.database();
    
    backgroundsimg=loadImage("Hot Air Ballon-01.png")
    backgrounds=createSprite(500,250,1000,500);
    backgrounds.addImage(backgroundsimg);
    backgrounds.scale=0.4;



    Body=createSprite(400, 200, 50, 50);
    hotairballoon=loadImage("Hot Air Ballon-02.png")
    Body.addImage(hotairballoon);
    Body.scale=0.5;

    Positionpre=NIKUNJDB.ref("Body/Position")
    Position=Body;
    Positionpre.on("value",readPosition)
    console.log(Position);
    
    
}

function draw(){
    background("Hot Air Ballon-01.png");
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(19,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }

    drawSprites();
}

function changePosition(x,y){
    NIKUNJDB.ref("Body/Position").update({
        x : Position.x + x,
        y : Position.y + y
    })


}
function readPosition(data){
    Position=data.val();
    Body.x=Position.x;
    Body.y=Position.y;
}
