var umbrella;
var maxdrops = 100;

function preload(){
    
}

function setup(){
  createCanvas(1000,700); 

  umbrella = new Umbrella(200,500);

  if(frameCount%150 === 0){
      for(var i = 0,;i<maxdrops;i++){
          Drops.push(new createDrop(random(0,400),random(0,400)));
      }
  }
    
}

function draw(){
  umbrella.display();  
  for(var i = 0;i<maxdrops;i++){
    drops[i].display();
    drops[i].update();
  }
}
function spawnThunder(){
if (frameCount % 12 === 0)
  var thunder = createSprite(400,275,130,40);

  var chidori = Math.round(random(1,4));
  switch(chidori){
    case 1: thunder.addImage("thunderbolt/1.png");
          break;
    case 2: thunder.addImage("thunderbolt/2.png");
          break;
    case 3: thunder.addImage("thunderbolt/3.png");
          break;
    case 4: thunder.addImage("thunderbolt/4.png");
          break;
          default: break;
  }
}
   

