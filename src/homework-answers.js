function sum(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function isNumberEqual(a, b) {
  return typeof a === "number" && a === b
}

function contains(a, b) {
  if (a.includes(b)) {
    return true
  } else {
    return false
  }
}

function countOccurance(a, b) {
  // take an object and a string
  // count the occurances of the string value throughout the object
  let count = 0
  function traverse(a, b) {
    for (const key in a) {
      if (a[key] === b) {
        count++
      } else if ( typeof(a[key]) === "object") {
        traverse(a[key], b)
      }
    }
  }
  traverse(a,b)
  return count
}


function findPerimeter(matrix) {
  const makeEdges = m => {
    const perimeter = []
    const bottomRow = []
    const leftEdge = []
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        if (i === 0) {
          perimeter.push(m[i][j])
        } else if (i < m.length -1 && j === m[i].length -1) {
          perimeter.push(m[i][j])
        } else if (i === m.length -1) {
          console.log(m[i][j])
          bottomRow.push(m[i][j])
        } else if (j === 0) {
          leftEdge.push(m[i][j])
        }
      }
    }
    const bottomReal = bottomRow.reverse()
    const leftSide = leftEdge.reverse()
    const threeSides = perimeter.concat(bottomReal)
    const sides = threeSides.concat(leftSide)
    return sides


  }
const sides = makeEdges(matrix)
return sides

}



  // const makeLeftEdge = (m) => {
  //   const edgeArray = []
  //   for (let i = 1; i < m.length; i++) {
  //     edgeArray.push(m[m.length - i][0])
  //   }
  //   return edgeArray
  // }
  // const wholePerimeter = makeThreeEdges(matrix)
  // const leftSide = makeLeftEdge(matrix)
  // const result = wholePerimeter.concat(leftSide)


  // return result

  // console.log(perimeter)



module.exports = {
  sum: sum,
  multiply: multiply,
  isNumberEqual: isNumberEqual,
  contains: contains,
  countOccurance: countOccurance,
  findPerimeter: findPerimeter
}
