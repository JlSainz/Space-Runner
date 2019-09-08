class Obstacle {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 10;
    this.h = this.w * 5;
    this.dx = 12;
    this.x = w;
    this.y = playerY + playerH - this.h - 5;

    this.img = new Image();
    this.img.src = "./images/fireball2.png";




  }


  draw() {
    this.ctx.drawImage(this.img, this.x, this.y);
  }

  move(score) {
    if (score < 700) this.x -= this.dx;
    if (score > 700 && score < 950) {
      this.dx = 25
      this.x -= this.dx
    }
    if (score > 950 && score < 1700) {
      this.dx = 31
      this.x -= this.dx
    }
    if (score > 1700) {
      this.dx = 36
      this.x -= this.dx
    }
  }

}

