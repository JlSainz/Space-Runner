let introMusic = new Audio();
introMusic.src = "audio/Intro.mp3";
let teletransportSound = new Audio();
teletransportSound.src = "audio/teletransport.mp3";
let levelUpSound = new Audio();
levelUpSound.src = "audio/levelUp.mp3";
let jumpSound = new Audio();
jumpSound.src = "audio/jump.mp3";
let runSound = new Audio();
runSound.src = "audio/move.mp3";
let gameOverSound = new Audio();
gameOverSound.src = "audio/gO.mp3";
let Game = {
  canvas: undefined,
  ctx: undefined,
  scoreBoard: undefined,
  gameover: false,
  keys: {
    RIGHT: 39,
    SPACE: 32,
    LEFT: 37
  },
  init: function(gameCanvasId) {
    this.canvas = document.getElementById(gameCanvasId);
    this.ctx = this.canvas.getContext("2d");
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.canvas.setAttribute("width", `${this.w}px`);
    this.canvas.setAttribute("height", `${this.h}px`);
    ScoreBoard.init(this.ctx);
    this.start();
  },
  start: function() {
    this.fps = 60;
    this.reset();
    this.interval = setInterval(() => {
      this.clear();
      this.drawAll();
      if (this.gameover) {
        this.gameOver();
        this.score = score;
      }
      this.moveAll(this.score);
      this.score += 1;
      this.framesCounter++;
      if (this.framesCounter > this.score.length) {
        this.framesCounter = 0;
      }
      if (this.framesCounter % 95 === 0) {
        this.generateObstacle();
      }
      if (this.player.invincible) {
        if (this.isCollision()) {
          // this.gameOvser()
          this.gameover = true;
        }
      }
    }, 1000 / 60);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  gameOver: function() {
    this.stop;
    let gameOverScreen = new Screen(this.ctx, this.w, this.h, this.x, this.y);
    gameOverScreen.drawGameOver(this.score);
    gameOverScreen.drawTotalPoints(this.score);
    introMusic.pause();
    gameOverSound.play();
  },
  reset: function() {
    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.player = new Player(this.w, this.h, this.ctx, this.keys);
    this.powerUp = new Powerups(this.w, this.h, this.ctx);
    this.scoreBoard = ScoreBoard;
    this.framesCounter = 0;
    this.obstacles = [];
    this.score = 0;
  },
  isCollision: function() {
    return this.obstacles.some(obstacle => {
      return (
        this.player.x + (this.player.w - 28) >= obstacle.x &&
        this.player.x < obstacle.x + obstacle.w &&
        this.player.y + this.player.h >= obstacle.y
      );
    });
  },
  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(function(obstacle) {
      return obstacle.x >= 0;
    });
  },
  generateObstacle: function() {
    this.obstacles.push(
      new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx)
    );
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  drawAll: function() {
    this.background.draw(this.score);
    if (this.player.teletransport === 0) {
      this.powerUp.draw3();
    } else if (this.player.teletransport === 1) {
      this.powerUp.draw2();
    } else if (this.player.teletransport === 2) {
      this.powerUp.draw1();
    }
    this.player.draw(this.framesCounter, this.score);
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
    this.drawScore();
  },
  moveAll: function() {
    this.background.move(this.score);
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move(this.score));
  },
  drawScore: function() {
    this.scoreBoard.update(this.score);
  }
};
