(function(){
  var game = document.getElementById("puzzle");
  var canvas = document.createElement("canvas");
  game.appendChild(canvas);
  canvas.width = 320;
  canvas.height = 320;
  var context = canvas.getContext("2d");
  context.fillStyle = "#eef8fd";
  context.fillRect(0, 0, canvas.width, canvas.height);

  class Render {
    drawBox(x, y, count) {
      context.fillStyle = "red";
      var width = canvas.width / 4;
      var height = canvas.height / 4;
      x = width * (x - 1);

      y = height * (y - 1);
      console.log(x, y, count);
      context.fillRect(x, y, width, height);
      context.fillStyle = "blue";
      context.fillText(count, x + 20, y + 20);
    }
  }

  window.game.render = Render;
})();
