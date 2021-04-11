const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var fairy;
var bgImg



function preload() {
	fairyImg = loadAnimation("Images/fairyImage1.png" , "Images/fairyImage2,png");
	bgImg = loadImage("Images/starryNight.jpg");
    
}
function setup(){
    createCanvas(800,800);

	fairy= createSprite(400,200,50,50);
	fairy.addAnimation(fairyImg);
    

}

function draw() {

    background("starryNight.jpg");

	if (keyIsDown("leftArrow")) {
		fairy.velocityX=-20;
	}
	if (keyIsDown("rightArrow")) {
		fairy.velocityY=20;
	}
    

    drawSprites();
}


function keyPressed(){

	
  
  
  }
  