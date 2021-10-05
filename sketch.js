//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
  background(46,139,87)


  drawSprites();
  //add styles here

}

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
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
