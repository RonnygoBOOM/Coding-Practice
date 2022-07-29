//if an object has 1 or more method, we say it has 'Behavior'

//the following is a 'Factory Function'

function createCircle(radius) {
  return {
    //if the key and the value are the same, we can just write the key. ('radius: radius,' == 'radius,' )
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);

//using '.this' keyword with a new operator is a constructor. Using a function that returns an object is called a factory function. I prefer factory functions.

//in javascript, functions are objects.
