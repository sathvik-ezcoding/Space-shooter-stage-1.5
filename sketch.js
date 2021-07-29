var ship1 

function preload(){
bg=loadImage("images/galaxy.jpg")
ship1_Img=loadImage("images/ship1.png")
}

function setup(){
var canvas = createCanvas(400,600)
ship1=createSprite(200,530,50,50)
ship1.scale=0.5
ship1.addImage(ship1_Img)
}

function draw(){
background(bg)
ship1.x=mouseX
ship1.y=mouseY
drawSprites()
}