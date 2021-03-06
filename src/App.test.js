import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const functions = require('./homework-functions');
const { sum, multiply, isNumberEqual, contains, countOccurance, findPerimeter } = functions


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('compares 7 and 7 and expects true', () => {
  expect(isNumberEqual(7,7)).toBe(true)
})

test('compares 7 and 70 and expects false', () => {
  expect(isNumberEqual(7,70)).toBe(false)
})

test('checks if word `dog` is in array and expects true', () => {
  expect(contains([1,2,3,4,"dog"],"dog")).toBe(true)
})

test('checks if word `cat` is in array and expects false', () => {
  expect(contains([1,2,3,4,"dog"],"cat")).toBe(false)
})

const testObj = {
  name: "test",
  date: "test",
  classes: "javascript",
  location: {
    latitude: "test",
    longitude: "122.33",
    coords: {
      check: "test"
    }
  }
}

test('checks number of times `test` occurs in an object and expects 4', () => {
  expect(countOccurance(testObj,"test")).toBe(4)
})

const matrix = [
  [1,2,3,4,5],
  [3,4,5,2,1],
  [5,2,8,5,1],
  [9,3,1,3,4],
  [3,4,2,7,8]
]
//
// const bonusMatrix = [
//   [1,2,3,4,5,6,7],
//   [4,2,3,4,5,6,8],
//   [0,2,3,4,6,6,9,1,2,3],
//   [3,2,3,4,9,6,10,11],
//   [1,2,3,4,2,6,11,12,13,14],
//   [1,2,3,4,5,6,12],
//   [1,2,6,8,333,6,13],
//   [1,2,3,4,5,6,13],
//   [9,2]
// ]

test('logs the perimeter numbers in a matrix', () => {
  expect(findPerimeter(matrix)).toEqual([1,2,3,4,5,1,1,4,8,7,2,4,3,9,5,3])
})

// test('logs the perimeter numbers in the bonus matrix', () => {
//   expect(findPerimeter(bonusMatrix)).toEqual([1,2,3,4,5,6,7,8,3,11,14,12,13,13,2,9,1,1,1,1,3,0,4])
// })
