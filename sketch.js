const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, shelf1, shelf2;

var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;

var box17, box18, box19, box20, box21;
var box22, box23, box24;
var box25;

var pentagonImage, pentagon;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){

    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (500,390,1000,20);
    shelf1 = new Ground (400,300,250,10);
    shelf2 = new Ground (675,150,200,10);

    //left shelf: bottom column left to right
    box1 = new BlueBox(325,280,30,40);
    box2 = new BlueBox(350,280,30,40);
    box3 = new BlueBox(375,280,30,40);
    box4 = new BlueBox(400,280,30,40);
    box5 = new BlueBox(425,280,30,40);
    box6 = new BlueBox(450,280,30,40);
    box7 = new BlueBox(475,280,30,40);

    //left shelf: middle column left to right
    box8 = new PinkBox(350,250,30,40);
    box9 = new PinkBox(375,250,30,40);
    box10 = new PinkBox(400,250,30,40);
    box11 = new PinkBox(425,250,30,40);
    box12 = new PinkBox(450,250,30,40);
    
    //left shelf: top column left to right
    box13 = new GreenBox(375,220,30,40);
    box14 = new GreenBox(400,220,30,40);
    box15 = new GreenBox(425,220,30,40);
    
    //left shelf: peak
    box16 = new BlueBox(400,190,30,40);

    //right shelf: bottom column left to right
    box17 = new BlueBox(625,125,30,40);
    box18 = new BlueBox(650,125,30,40);
    box19 = new BlueBox(675,125,30,40);
    box20 = new BlueBox(700,125,30,40);
    box21 = new BlueBox(725,125,30,40);

    //right shelf: middle column left to right
    box22 = new GreenBox(650,105,30,40);
    box23 = new GreenBox(675,105,30,40);
    box24 = new GreenBox(700,105,30,40);
    
    //right shelf: top column left to right
    box25 = new PinkBox(675,85,30,40);

    var options = {
        density:2,
        friction:1
    }

    polygon = Bodies.circle(100,200,15,options);
    World.add(world,polygon);

    slingshot = new SlingShot(polygon,{x:100,y:200});

}

function draw(){

    background(0);

    ground.display();
    shelf1.display();
    shelf2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    imageMode (CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();

    Engine.update(engine);

    fill ("tan");
    textFont("Georgia");
    textSize(40);
    text("Tower Siege",5,40);
    textSize(12.5);
    text("Drag and release the yellow hexagon with the mouse to destroy the towers. Good luck!",5,65);
    text("Press the space bar to reset the location of the yellow hexagon and have another shot.",5,80);
    text("Press the right arrow key to reset the location of the yellow hexagon and all the towers to restart the game.",5,95);
    text("You may have to press the right arrow key two or more times to do so.",5,110);

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	
	if (keyCode === 32){
		Matter.Body.setPosition(polygon,{x:100,y:200});
		slingshot.attach(polygon);
    }

    if (keyCode === RIGHT_ARROW){

        Matter.Body.setPosition(polygon,{x:100,y:200});
        slingshot.attach(polygon);
        
        Matter.Body.setPosition(box1.body,{x:325,y:280});
        Matter.Body.setPosition(box2.body,{x:350,y:280});
        Matter.Body.setPosition(box3.body,{x:375,y:280});
        Matter.Body.setPosition(box4.body,{x:400,y:280});
        Matter.Body.setPosition(box5.body,{x:425,y:280});
        Matter.Body.setPosition(box6.body,{x:450,y:280});
        Matter.Body.setPosition(box7.body,{x:475,y:280});
        Matter.Body.setPosition(box8.body,{x:350,y:250});
        Matter.Body.setPosition(box9.body,{x:375,y:250});
        Matter.Body.setPosition(box10.body,{x:400,y:250});
        Matter.Body.setPosition(box11.body,{x:425,y:250});
        Matter.Body.setPosition(box12.body,{x:450,y:250});
        Matter.Body.setPosition(box13.body,{x:375,y:220});
        Matter.Body.setPosition(box14.body,{x:400,y:220});
        Matter.Body.setPosition(box15.body,{x:425,y:220});
        Matter.Body.setPosition(box16.body,{x:400,y:190});
        Matter.Body.setPosition(box17.body,{x:625,y:125});
        Matter.Body.setPosition(box18.body,{x:650,y:125});
        Matter.Body.setPosition(box19.body,{x:675,y:125});
        Matter.Body.setPosition(box20.body,{x:700,y:125});
        Matter.Body.setPosition(box21.body,{x:725,y:125});
        Matter.Body.setPosition(box22.body,{x:650,y:105});
        Matter.Body.setPosition(box23.body,{x:675,y:105});
        Matter.Body.setPosition(box24.body,{x:700,y:105});
        Matter.Body.setPosition(box25.body,{x:675,y:85});

        Matter.Body.setAngle(box1.body,0);
        Matter.Body.setAngle(box2.body,0);
        Matter.Body.setAngle(box3.body,0);
        Matter.Body.setAngle(box4.body,0);
        Matter.Body.setAngle(box5.body,0);
        Matter.Body.setAngle(box6.body,0);
        Matter.Body.setAngle(box7.body,0);
        Matter.Body.setAngle(box8.body,0);
        Matter.Body.setAngle(box9.body,0);
        Matter.Body.setAngle(box10.body,0);
        Matter.Body.setAngle(box11.body,0);
        Matter.Body.setAngle(box12.body,0);
        Matter.Body.setAngle(box13.body,0);
        Matter.Body.setAngle(box14.body,0);
        Matter.Body.setAngle(box15.body,0);
        Matter.Body.setAngle(box16.body,0);
        Matter.Body.setAngle(box17.body,0);
        Matter.Body.setAngle(box18.body,0);
        Matter.Body.setAngle(box19.body,0);
        Matter.Body.setAngle(box20.body,0);
        Matter.Body.setAngle(box21.body,0);
        Matter.Body.setAngle(box22.body,0);
        Matter.Body.setAngle(box23.body,0);
        Matter.Body.setAngle(box24.body,0);
        Matter.Body.setAngle(box25.body,0);

    }

}