require('./includesOneOf');

// Primitives
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includesOneof([2, 8, 10])); // true
console.log(arr.includesOneof([10, 11, 12])); // false
console.log(arr.includesOneof([])); // false

// Objects
const arr2 = [
  { name: 'James Bond', code: '007' },
  { name: 'Edward Donne', code: '001' }
];
console.log(arr2.includesOneof([{ name: 'James Bond', code: '007' }])); // true
console.log(arr2.includesOneof([{ name: 'James Bond', code: '007', organization: 'MI6' }])); // false

// Arrays
const arr3 = [[1, 22, 33, 4], [4, 55, 6, 772]];
console.log(arr3.includesOneof([[1, 22, 33, 4]])); // true
console.log(arr3.includesOneof([[1, 33, 22, 4]])); // false
