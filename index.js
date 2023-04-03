// Code your solution in this file!

// using the information from README.md and testindex.js

//receives a function and calls it:
//ReferenceError: receivesAFunction is not defined
//AssertionError: expected { Spy } to have been called

function receivesAFunction(callback) {
    callback();
}

// ReferenceError: returnsANamedFunction is not defined
// AssertionError: expected undefined to be a function
// TypeError: Cannot read properties of undefined (reading 'name')

function varFunction() {
  return console.log("Creating a new Function called varFunction");
}

function returnsANamedFunction() {
  //passing and returning the varFunction that was defined above
  return varFunction;
}

// ReferenceError: returnsAnAnonymousFunction is not defined
// AssertionError: expected undefined to be a function
// TypeError: Cannot read properties of undefined (reading 'name')

// making the anonymous function without a name within returnsAnAnonymousFunction, then running it
function returnsAnAnonymousFunction() {
  return function() {
    console.log('Calling a new function within the scope of returnsAnAnonymousFunction');
  };
};

/*
Alternative shorthand code to complete the unit tests
  function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {}
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {};
  }
*/