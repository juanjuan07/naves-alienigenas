var sprite_group = createGroup();

for(var i=1; i<=4; i++)
{
  var sprite = createSprite(80*i, 350);
  sprite.setAnimation("ufo_1");
  sprite.scale = 0.2;
  sprite.velocityY = -4;
  sprite_group.add(sprite);
}

createEdgeSprites();
function draw() {
  background("black");
  sprite_group.bounceOff(edges);
  drawSprites();
}

function mousePressed() {
  
  for(var j=1; j<=50; j=j+1) {
    var star = createSprite(randomNumber(0,400), randomNumber(0,200));
    star.setAnimation("star2_1");
  }
  
  
}
