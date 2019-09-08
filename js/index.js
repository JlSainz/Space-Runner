
window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    introMusic.play();
    document.querySelector(".main").style.display = "none";
    Game.init("gameCanvas");
  };
};