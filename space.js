(function(){
  class Space {
    initialState() {
      this.state = {
        width: 4,
        height: 4,
        boxes: [],
      }
    }

    constructor(props) {
      if(props) {
        this.state = props.state;
      } else {
        this.initialState();
      }
    }

    addBox(props) {
      props.state.type = 'box';
      var self = this;

      props.onMoving =  function(props) {
        return self.onMoving(props);
      };
      var box = new game.box(props);
      this.state.boxes.push(box);
    }

    addEmptyBox(props) {
      props.state.type = 'empty';
      var emptyBox = new game.box(props);
      this.state.boxes.push(emptyBox);
      this.emptyBox = emptyBox;
    }

    generateBoxes() {
      var width = this.state.width;
      var height = this.state.height;
      var length = width * height;
      var x = 1;
      var y = 1;
      for(var i = 1; i < length; i++) {

        if(x > width) {
          y += 1;
          x = 1;
        }

        this.addBox({
          state: {
            x: x,
            y: y,
            count: i,
          }
        });
        x += 1
      }

      this.addEmptyBox({ // add empty box
        state: {
          x: 4,
          y: 4,
        }
      })
    }

    onMoving(props) { // could the box make a move?
      console.log(props.x == this.emptyBox.state.x && props.y == this.emptyBox.state.y);
      if(props.x == this.emptyBox.state.x && props.y == this.emptyBox.state.y) {
        return true;
      } else {
        return false;
      }
    }

    onShuffle() { // shuffle all boxes
      var randomBoxes = this.state.boxes
        .map(function(i){
          return {
            x:i.state.x,
            y:i.state.y
          }
          });

      randomBoxes.sort(function(a, b) {
        return Math.random() - 0.5;
      });
      //console.log(randomBoxes);
      var boxes = this.state.boxes;
      //console.log(randomBoxes.length);
      for(var i = 0; i < randomBoxes.length; i++) {

        boxes[i].state.x = randomBoxes[i].x;

        boxes[i].state.y = randomBoxes[i].y;
        //console.log(boxes[i].state.x, randomBoxes[i].state.x, boxes[i].state.y, randomBoxes[i].state.y);
      }
    }
  }
  window.game.space = Space;
})();
