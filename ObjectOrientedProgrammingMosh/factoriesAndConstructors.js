//if an object has 1 or more method, we say it has 'Behavior'

function createCircle() {
  return {
    //if the key and the value are the same, we can just write the key.
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();
