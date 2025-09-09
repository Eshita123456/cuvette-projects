const promise = Promise.resolve('Hello, ');

promise.then(message => console.log(message + 'World!'));  // Output: Hello, World!