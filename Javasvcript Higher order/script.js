// Hoisting example

console.log(x); // undefined

var x = 10;



// Higher order function example

function greet(callback) {

  callback("Hello");

}



greet((message) => {

  console.log(message);

});



// Closure example

function outer() {

  let count = 0;

  return function inner() {

    count++;

    console.log(count);

  };

}



const counter = outer();

counter(); // 1

counter(); // 2