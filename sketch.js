//Create variables here
var dog, happyDog, database;
var foods,foodStock;
var firebase;
function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {

  database=firebase.database();
	createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dog1);
  dog.scale=0.2;
  

  foodStock=database.ref("Food");
   foodStock.on("value",readStock);
}


function draw() {  

  background(46, 139, 87);


  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dog2)
  }
  drawSprites();


textSize(30);
fill("red");
text("Noote please press UP_ARROW to feed food");
}
 
  //add styles here






//function to Read values from DB
function readStock(data){
  foods=data.val();
}

//function to write values DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

