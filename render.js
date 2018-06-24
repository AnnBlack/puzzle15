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
      context.fillStyle = "rgb(217, 229, 247)";
      var width = canvas.width / 4;
      var height = canvas.height / 4;
      x = width * (x - 1);

      y = height * (y - 1);
      context.fillRect(x, y, width, height);
      context.fillStyle = "rgb(36, 85, 158)";
      context.fillText(count, x + 30, y + 50);
      context.font = "32px serif";
      context.strokeStyle = "rgb(36, 85, 158)";
      context.strokeRect(x, y, width, height);
      if(count === null) {
        context.fillStyle = "white";
        context.fillRect(x, y, width, height);
        context.fillStyle = "transparent";
        context.fillText(count, x + 30, y + 50);
        context.strokeStyle = "rgb(36, 85, 158)";
        context.strokeRect(x, y, width, height);
      }
    }
  }

  window.game.render = Render;
})();
