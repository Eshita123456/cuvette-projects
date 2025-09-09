function counter() {

  let count = 0;

  return function inner() {

    count++;

    console.log(`Counter: ${count}`);

  }

}



const incrementCounter = counter();

incrementCounter();  // Output: Counter: 1

incrementCounter();  // Output: Counter: 2