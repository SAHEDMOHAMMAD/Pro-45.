var canvas, backgroundImage;
var player1,playerStep1,playerNormal1,playerTouch1;
var player2,playerStep2,playerNormal2,playerTouch2;
var player3,playerStep3,playerNormal3,playerTouch3;
var player4,playerStep4,playerNormal4,playerTouch4;
var player5,playerStep5,playerNormal5,playerTouch5;
var Tree
var Tree2
var invisibleLeft , invisibleRight,invisibleBottom,invisibleTop1
var invisibleCenter
var restart





function preload(){
backgroundImage=loadImage("sprites/GROUND.jpg")
    player1 = loadAnimation("sprites/player1-1.png","sprites/player1-2.png",
    "sprites/player1-3.png","sprites/player1-4.png");

    player2 = loadAnimation("sprites/player2-1.png","sprites/player2-2.png",
    "sprites/player2-3.png","sprites/player2-4.png");

    player3 = loadAnimation("sprites/player3-1.png","sprites/player3-2.png",
    "sprites/player3-3.png","sprites/player3-4.png");

    player4 = loadAnimation("sprites/player4-1.png","sprites/player4-2.png",
    "sprites/player4-3.png","sprites/player4-4.png");

    player5 = loadAnimation("sprites/player5-1.png","sprites/player5-2.png",
    "sprites/player5-3.png","sprites/player5-4.png");

   

     Tree=loadAnimation("sprites/TREE.png")
     Tree2=loadAnimation("sprites/TREE1.png")

     restartImg=loadImage("sprites/Restart.png");

}

function setup(){
canvas = createCanvas(displayWidth,displayHeight);




TreeA=createSprite(displayWidth/7,displayHeight/3)
TreeA.addAnimation("running",Tree)
TreeA.scale=0.6


TreeB=createSprite(displayWidth/1.09,displayHeight/3)
TreeB.addAnimation("running",Tree)
TreeB.scale=0.6


playerA=createSprite(displayWidth/2,displayHeight/2)
playerA.addAnimation("running",player1)
playerA.scale=0.2
playerA.velocityX=8


playerB=createSprite(displayWidth-100,displayHeight/2)
playerB.addAnimation("running",player2)
playerB.scale=0.2
playerB.velocityX=-9

playerC=createSprite(displayWidth-200,displayHeight/2)
playerC.addAnimation("running",player3)
playerC.scale=0.2
playerC.velocityX=-9

playerD=createSprite(displayWidth-400,displayHeight/2)
playerD.addAnimation("running",player4)
playerD.scale=0.2
playerD.velocityX=-7

playerE=createSprite(displayWidth-900,displayHeight/2)
playerE.addAnimation("running",player5)
playerE.scale=0.2




TreeA=createSprite(displayWidth/7,displayHeight/3)
TreeA.addAnimation("running",Tree)
TreeA.scale=0.6


TreeB=createSprite(displayWidth/1.09,displayHeight/3)
TreeB.addAnimation("running",Tree)
TreeB.scale=0.6

invisibleLeft=createSprite(1,18,5,1500)
invisibleLeft.visible = false ;

invisibleRight=createSprite(1277,18,5,1500)
invisibleRight.visible = false ;

invisibleBottom=createSprite(17,715,2510,5)
invisibleBottom.visible = false ;

invisibleTop1=createSprite(206,275,3000,5)
invisibleTop1.visible=false;

invisibleCenter=createSprite(displayWidth/2,displayHeight/2,3,80)
invisibleCenter.visible=false;

restart = createSprite(50,50);
restart.addImage(restartImg);
restart.scale = 0.3;
restart.visible=true;
restart.scale=0.3






// player1 = new Player(0,0,0,0);
// player2 = new Player(0,0,0,0);
// player3 = new Player(0,0,0,0);
// player4 = new Player(0,0,0,0);
// player5 = new Player(0,0,0,0);
// tree    = new Tree(0,0,0,0)
}



function draw(){
background(backgroundImage);

if(playerA.isTouching(invisibleRight)){
  playerA.velocityX=-7
  
}

if(playerA.isTouching(invisibleLeft)){
  playerA.velocityX=7
}

if(playerA.isTouching(invisibleCenter)){
  playerA.velocityY=7
}

if(playerA.isTouching(invisibleBottom)){
  playerA.velocityY=-7
}

if(playerA.isTouching(invisibleTop1)){
  playerA.velocityY=7
}

if(playerB.isTouching(invisibleLeft)){
  playerB.velocityX=7
  
}

if(playerB.isTouching(invisibleCenter)){
  playerB.velocityX=-7
  playerB.velocityY=+7
  
}

if(playerB.isTouching(invisibleBottom)){
  playerB.velocityX=7
  playerB.velocityY=-7
  
}

if(playerB.isTouching(invisibleTop1)){
  playerB.velocityX=-7
  playerB.velocityY=7
  
}

if(playerD.isTouching(invisibleRight)){
  playerD.velocityX=-7
}

if(playerD.isTouching(invisibleLeft)){
  playerD.velocityX=7
}

if(playerD.isTouching(invisibleCenter)){
  playerD.velocityY=7
}

if(playerD.isTouching(invisibleBottom)){
  playerD.velocityY=-7
}

if(playerD.isTouching(invisibleTop1)){
  playerD.velocityY=7
}


if(playerC.isTouching(invisibleRight)){
  playerC.velocityX=-7
}

if(playerC.isTouching(invisibleLeft)){
  playerC.velocityX=7
}

if(playerC.isTouching(invisibleCenter)){
  playerC.velocityY=-7
}

if(playerC.isTouching(invisibleBottom)){
  playerC.velocityY=-7
}


if(playerC.isTouching(invisibleTop1)){
  playerC.velocityY=7

}

if(playerA.isTouching(playerE)){
  gameState=END

  

}


if(playerB.isTouching(playerE)){
  gameState=END
  
 
}

if(playerC.isTouching(playerE)){
  gameState=END


}



if(playerD.isTouching(playerE)){
  gameState=END
  

}




//if(keyDown("space")&&playerE.y>=159) {
//  playerE.velocityY = -10;
//}
// if(playerA.x>1100){
//  // playerA.velocityX=playerA.velocityX*-1
//  playerA.velocityY=4
//  playerA.velocityX=-1
// }

// if(playerA.y>600){
//   playerA.velocityX=-4
//   playerA.velocityY=2
// }

// if(playerA.x<40){
//   playerA.velocityX=1
//   playerA.velocityY=-4
// }
// if(playerA.y<370&&playerA.x<300){
//   playerA.velocityX=4
//   playerA.velocityY=1
// }



 
 











 // if(playerB.x<10||playerB.x>1230||playerB.y<370){
//   playerB.velocityX=playerB.velocityX*-1
// }
// if(playerC.x<10||playerC.x>1230||playerC.y<370){
//   playerC.velocityX=playerC.velocityX*-1
// }
// if(playerD.x<10||playerD.x>1230||playerD.y<370){
//   playerD.velocityX=playerD.velocityX*-1
// }


//playerA.bounceOff(playerB,explosion);
drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);


}

// function explosion()
// {
//   playerA.velocityY=random(4,-4);
//   playerA.velocityX=random(4,-4);
// }





