// Array methods example

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); 



const person = {

  name: "John",

  age: 30,

};



const { name, age } = person;

console.log(name); 

console.log(age); 



// Spread operator example

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const mergedArr = [...arr1, ...arr2];

console.log(mergedArr); 