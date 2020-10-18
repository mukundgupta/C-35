var  database;
var canvas;
var playerCount;
var gameState = 0;
var backGroudImage;
var player,form;
var game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
    
  
}
