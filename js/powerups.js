class Powerups {
  constructor(w, h, ctx) {
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.x = 35;
    this.y = 70;
    this.img = new Image();
    this.img.src = "./images/rayo.png";
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y)
    }
  }
  draw3() {
    this.ctx.drawImage(this.img, this.x + 40, this.y);
    this.ctx.drawImage(this.img, this.x + 20, this.y);
    this.ctx.drawImage(this.img, this.x, this.y);
  }
  draw2() {
    this.ctx.drawImage(this.img, this.x + 20, this.y);
    this.ctx.drawImage(this.img, this.x, this.y);
  }
  draw1() {
    this.ctx.drawImage(this.img, this.x, this.y);
  }
}