class Player {
  constructor(w, h, ctx, keys, ) {
    this.canvasW = w;
    this.canvasH = h;
    this.ctx = ctx;
    this.keys = keys;
    this.invincible = false;
    this.teletransport = 0;
    this.effects = [];
    this.x = this.canvasW * 0.09;
    this.y0 = this.canvasH * 0.9;
    this.y = this.y0;
    this.img = new Image();
    this.img.src = "./images/run6.png";
    this.imgJump = new Image();
    this.imgJump.src = "./images/jump.png";
    this.imgJump.onload = () => {
      this.ctx.drawImage(this.img, this.x + 15, this.y)
    }
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y)
    }
    this.img.frames = 6;
    this.img.frameIndex = 0;
    this.w = 58;
    this.h = 85;
    this.vy = 1;
    this.jump = false;
    this.setListeners();
  }
  draw(framesCounter, score) {
    if (!this.jump) {
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        0,
        Math.floor(this.img.width / this.img.frames),
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
      );
      this.animateImg(framesCounter, score)
    } else {
      this.ctx.drawImage(
        this.imgJump,
        this.x,
        this.y,
        this.w + 60,
        this.h
      );
    }
    this.effects.forEach(effect => effect.draw())
    this.eraseEffect(framesCounter)
  }
  animateImg(framesCounter, score) {
    if (score < 400) {
      if (framesCounter % 7 === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 5) this.img.frameIndex = 0;
      }
    }
    if (score > 400 && score < 700) {
      if (framesCounter % 6 === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 5) this.img.frameIndex = 0;
      }
    }
    if (score > 700 && score < 900) {
      if (framesCounter % 5 === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 5) this.img.frameIndex = 0;
      }
    }
    if (score > 900 && score < 1450) {
      if (framesCounter % 4 === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 5) this.img.frameIndex = 0;
      }
    }
    if (score > 1450) {
      if (framesCounter % 3 === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 5) this.img.frameIndex = 0;
      }
    }
  }
  setListeners() {
    document.onkeydown = function (e) {
      if (event.keyCode === this.keys.SPACE && this.y == this.y0) {
        this.jump = true;
        jumpSound.play();
        setTimeout(() => this.jump = false, 1400)
        this.y -= 3;
        this.vy -= 15;
      }
      if (event.keyCode === this.keys.RIGHT && this.y == this.y0 && this.x < (this.canvasW - 300)) {
        this.invincible = true;
        this.teletransport++
        teletransportSound.play();
        if (this.teletransport <= 3) {
          this.x += 400
          this.effects.push(new Effects(50, 50, this.x - 400, this.y, this.ctx))
        } else {
          this.x += 30
          teletransportSound.pause();
          runSound.play();
        }
      }
      if (event.keyCode === this.keys.LEFT && this.y == this.y0 && this.x < this.canvasW) {
        this.invincible = true;
        this.teletransport++
        teletransportSound.play();
        if (this.teletransport <= 3) {
          this.x -= 400
          this.effects.push(new Effects(50, 50, this.x + 400, this.y, this.ctx))
        } else {
          this.x -= 30
          teletransportSound.pause();
          runSound.play();
        }
      }
    }.bind(this);
  }
  move() {
    var gravity = 0.3;
    if (this.y >= this.y0) {
      this.vy = 1;
      this.y = this.y0;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }
  }
  eraseEffect(framesCounter) {
    if (framesCounter % 80) {
      this.effects = []
    }
  }
}
