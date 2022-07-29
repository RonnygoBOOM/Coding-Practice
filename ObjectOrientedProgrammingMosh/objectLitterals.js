// {} is an object literal
const circle = {
  //'members' of an object are called properties
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  //when you have a member that is a function, like 'draw' below, it is called a method.
  //properties hold values, whereas methods define logic
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
