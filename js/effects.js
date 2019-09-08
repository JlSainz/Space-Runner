class Effects {
  constructor(w, h, x, y, ctx, ) {
    this.w = w;
    this.h = h;
    this.ctx = ctx
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "./images/effect.png";
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y - 40, 150, 150);
  }
}