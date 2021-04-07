constructorDrop(){
this.rain = Bodies.circle(x,y,5,options);

friction:0.1;

}

update(){
    if(this.rain.position.y > height){

        MutationObserver.body.setPosition(this.rain,{x:RandomSource(0,400),y:RandomSource(0,400)})
    }
}
