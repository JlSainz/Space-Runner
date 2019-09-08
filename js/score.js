let ScoreBoard = {
  ctx: undefined,
  init: function (ctx) {
    ctx.font = "55px Impact";
    this.ctx = ctx;
  },
  update: function (score) {
    this.ctx.fillStyle = "white";
    this.ctx.fillText(Math.floor(score), 50, 50);
  }
};
