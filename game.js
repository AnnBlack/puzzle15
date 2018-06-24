(function() {
  var restartBtn = document.getElementById("restart");
  
  class Play {
    initialState() {
      this.state = {
        attempts: null,
        timer: null
      }
    }

    constructor(props) {
      if(props) {
        this.state = props.state;
      } else {
        this.initialState();
      }
      this.onStart();
      this.onRefresh();
    }

    onStart() {
      this.space = new game.space();
      this.space.generateBoxes();
      this.space.onShuffle();
      this.render = new game.render();
      var boxes = this.space.state.boxes;
      //console.log(this.space.state.boxes);
      for(var i = 0; i < boxes.length; i++) {
        this.render.drawBox(boxes[i].state.x, boxes[i].state.y, boxes[i].state.count);
      }
    }

    onRefresh() {
      restartBtn.addEventListener("click", this.onStart, false);
    }

    onVictory() {

    }

    onTheEnd() {

    }

    onFail() {

    }

  }
  window.game.play = Play;
})();
