
var cat,catsiting,cat_runing,cat_siting
var rat,mouseimg,ratimg2,ratimg3,ratimg4
var garden,gardenimg



function preload() {
  ratimg=loadImage("images/mouse1.png")
cat_running=loadImage("images/cat3.png")
gardenimg=loadImage("images/garden.png")



}




function setup(){
    createCanvas(800,600);
 rat=createSprite(40,546)
rat.addImage(ratimg)
rat.scale=0.1


cat=createSprite(732,546)
cat.addImage(cat_running)
cat.scale=0.1
cat.velocityX=-9


}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    text(mouseX + ","+ mouseY,mouseX,mouseY,)
cat.collide (rat)


    drawSprites();
}


  



