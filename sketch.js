const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
var corHour = hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1350,700);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
       background(backgroundImg);

    Engine.update(engine);

    if(hour>12){
        corHour = hour%12
      }

    // write code to display time in correct format here
    if(hour<12){
        textSize(30);
        fill("red")
    text("Time : " + corHour + " A.M.",1150,50);
    }
    if(hour>12){
          textSize(30);
        fill("blue");
        text("Time : " + corHour + " P.M.",1150,50);
    }
    if(hour>=19 && hour<20){
        textSize(30);
        fill("yellow");
        text("Match Time! Get ready for IPL",700,50);
    }
    if(hour>=20 && hour<=23){
        textSize(30);
        fill("yellow");
        text("Match Time! IPL is going on Watch Live!",400,50);
    }
    else{
        textSize(30)
        fill("yellow");
        text("I will inform you for the I.P.L. on 7 P.M.",300,50)
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime =  responseJSON.datetime;
     hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=05 && hour<=06){
        bg = "sunrise1.png"
    }
    if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }
    if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }
    if(hour>=12 && hour<=14){
        bg = "sunrise5.png";
    }
    if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
    }
    if(hour>=16 && hour<=17){
        bg = "sunrise6.png";
    }
    if(hour>=17 && hour<=18){
        bg = "sunset7.png";
    }
    if(hour>=18 && hour<=19){
        bg = "sunset8.png";
    }
    if(hour>=19 && hour<=20){
        bg = "sunset9.png";
    }
    if(hour>=20 && hour<=21){
        bg = "sunset10.png";
    }
    if(hour>=21 && hour<=22){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
