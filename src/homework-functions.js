function sum(a, b) {
  // take two arguments, return added together
}

function multiply(a, b) {
  // take two arguments, return multiplied together
}

function isNumberEqual(a, b) {
  // take two arguments, check if they are numbers and equal
}

function contains(a, b) {
  // take two arguments, an array and a string
  // if the array contains the string, return true, else return false
}

function countOccurance(a, b) {
  // take an object and a string
  // count the occurances of the string value throughout the object
}


function findPerimeter(matrix) {
  // take a matrix ( an array inside of an array) such as
  // [
  //  [1,2,3,4,5],
  //  [1,2,3,4,5],
  //  [1,2,3,4,5]
  //  ]
  //
  // and return an array of the perimeter numbers starting clockwise from top right
  // in this case it would be
  // [1,2,3,4,5,5,5,6,3,2,1,1]
  //
  
}



module.exports = {
  sum: sum,
  multiply: multiply,
  isNumberEqual: isNumberEqual,
  contains: contains,
  countOccurance: countOccurance,
  findPerimeter: findPerimeter
}
