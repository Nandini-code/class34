var ball;
var database,position;
function setup(){
    database=firebase.database();
    var locNode=database.ref("ball/position");
    locNode.on("value",readapp,showerror);
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({x:ball.x + x,
    y:ball.y +y})
}

function readapp(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showerror(){
    console.log(" Error Occurs");
}