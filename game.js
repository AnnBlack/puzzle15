(function() {
  class Game {
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
    }

    onStart() {
      this.space = new game.space();
      this.space.generateBoxes();
      this.space.onShuffle();
      this.render = new game.render();
      var boxes = this.space.state.boxes;
      console.log(this.space.state.boxes);
      for(var i = 0; i < boxes.length; i++) {
        this.render.drawBox(boxes[i].state.x, boxes[i].state.y, boxes[i].state.count);
      }
    }

    onRefresh() {

    }

    onVictory() {

    }

    onTheEnd() {

    }

    onFail() {

    }

  }
  window.game.game = Game;
})();
