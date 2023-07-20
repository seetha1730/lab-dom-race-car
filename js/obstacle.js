class Obstacle extends Component {
  constructor(gameScreen) {
    super(gameScreen,Math.floor(Math.random() * 300 + 100),0,100,150,"./images/redCar.png" );

    // this.left = Math.floor(Math.random()*300+100)
    // this.top = Math.floor(Math.random()*300+100)
    // this.width = 100;
    // this.height = 150
    // this.element = document.createElement("img");
    // this.element.src = "../images/redCar.png"
  }
  move() {
    //console.log(this.directionY, this.top)
    this.top += 3;
    this.updatePostion();
  }
}
