class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    //this.obstacle = new Obstacle(this.gameScreen);
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "block";

    // Start the game loop
    this.gameLoop();
  }

  gameLoop() {
    console.log("in the game loop");

    // Interrupt the function to stop the loop if "gameIsOver" is set to "true"
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    //console.log("in the update");
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacleItem = this.obstacles[i];
      obstacleItem.move();

      if (this.player.didCollide(obstacleItem)) {
        obstacleItem.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        let liveValue = document.getElementById("lives");
        liveValue.innerHTML = this.lives;
        i--;

      } else if (obstacleItem.top > this.height) {
        this.score++;
        let scoreValue = document.getElementById("score");
        scoreValue.innerHTML = this.score;
        obstacleItem.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    //  new obstacle based on a random probability
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
