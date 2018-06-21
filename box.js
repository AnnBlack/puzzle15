(function(){
  class Box {
    initialState() {
      this.state = {
        x: null,
        y: null,
        count: null,
        to: {
          x: null,
          y: null
        },
        type: null
      }
    }

    constructor(props) {
      if(props) {
        this.initialState();
        this.state = Object.assign(this.state, props.state)

        this.onMoving = props.onMoving;
      } else {
        this.initialState();
      }
    }

    up() {
      this.state.to.x = this.state.x;
      this.state.to.y = this.state.y + 1;
      this.moving();
    }

    down() {
      this.state.to.x = this.state.x;
      this.state.to.y = this.state.y - 1;
      this.moving();
    }

    left() {
      this.state.to.x = this.state.x - 1;
      this.state.to.y = this.state.y;
      this.moving();
    }

    right() {
      console.log(this.state);
      this.state.to.x = this.state.x + 1;
      this.state.to.y = this.state.y;
      this.moving();
    }

    moving() {
      if(this.onMoving) {
        var moving = this.onMoving(this.state.to);
        if(moving) {
          console.log('i m  move in ',this.state, ' to ',this.state.to)
          this.state.x = this.state.to.x;
          this.state.y = this.state.to.y;
        }
      }
    }

  }
  window.game.box = Box;
})();
