class Screen {
  constructor(ctx, w, h) {
    this.ctx = ctx
    this.w = w;
    this.h = h;
    this.gameOverImg = new Image()
    this.gameOverImg.src = "./images/gameover.jpg"
  }
  drawGameOver() {
    this.ctx.drawImage(this.gameOverImg, 0, 0, this.w, this.h);
  }
  drawTotalPoints(score) {
    this.ctx.font = "60px Impact";
    this.ctx.fillStyle = "rgb(219, 249, 4)";
    this.ctx.fillText(`NICE! You travelled ${score} light years.`, 300, 850);
  }
}