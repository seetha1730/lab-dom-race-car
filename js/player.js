//const game = new Game();
class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);

    this.directionX = 0;
    this.directionY = 0;
  }
  move() {
    //console.log(this.directionY, this.top)
    this.left += this.directionX;
    this.top += this.directionY;
    this.updatePostion();

    if (this.left < 10) {
      this.left = 10;
    }

    // handles top side
    if (this.top < 10) {
      this.top = 10;
    }

    // handles right hand side 500-100-10=390
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    // handles bottom side 600-150-10=440
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }
  }
  //   updatePostion() {
  //     this.element.style.top = `${this.top}px`;
  //     this.element.style.left = `${this.left}px`;
  //   }

  didCollide(obstacle) {
    //reference of element.getBoundingClientRect()
    // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

    //var rect = element.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);

    const playerPosition = this.element.getBoundingClientRect();
    const obstaclePostion = obstacle.element.getBoundingClientRect();
    if (
      playerPosition.left < obstaclePostion.right &&
      playerPosition.right > obstaclePostion.left &&
      playerPosition.top < obstaclePostion.bottom &&
      playerPosition.bottom > obstaclePostion.top
    ) {
      // console.log("collide")
      return true;
    } else return false;
  }
}
