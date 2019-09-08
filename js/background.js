
class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.h = h;
    this.w = w;
    this.img1stage = new Image();
    this.img1stage.src = "./images/stage1.jpg";
    this.img2stage = new Image();
    this.img2stage.src = "./images/stage2.jpg";
    this.img3stage = new Image();
    this.img3stage.src = "./images/stage3.jpg";
    this.x = 0;
    this.y = 0;
    this.dx = 6;
  }
  draw(score) {
    if (score < 807) {
      this.ctx.drawImage(
        this.img1stage,
        this.x,
        this.y,
        this.w,
        this.h
      );
      this.ctx.drawImage(
        this.img1stage,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      );
      this.ctxfillstyle = "white";
      this.ctx.fillText("LEVEL 1", this.w / 2.3, this.h / 4.6);
    }
    if (score > 800) {
      this.ctx.drawImage(
        this.img2stage,
        this.x,
        this.y,
        this.w,
        this.h
      );
      this.ctx.drawImage(
        this.img2stage,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      );
      this.ctxfillstyle = "white";
      this.ctx.fillText("LEVEL 2", this.w / 2.3, this.h / 4.6);
    }
    if (score > 1600) {
      this.ctx.drawImage(
        this.img3stage,
        this.x,
        this.y,
        this.w,
        this.h
      );
      this.ctx.drawImage(
        this.img3stage,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      );
      this.ctxfillstyle = "white";
      this.ctx.fillText("LEVEL 3", this.w / 2.3, this.h / 4.6);
    }
  }
  move(score) {
    this.x -= this.dx;
    if (this.x < -this.w) this.x = 0;
    if (score > 650) this.dx = 12;
    if (score > 650 && score < 1400) this.dx = 18;
    if (score > 1400 && score) this.dx = 21;
  }
}


