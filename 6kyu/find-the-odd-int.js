// Find the Odd Int 

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(a) {
    let result = 0;
    const obj = a.reduce((obj, curr) => {
      obj[curr] = obj[curr] + 1 || 1;
      return obj;
    }, {})
    
    for (let key in obj) {
      if (Number(obj[key]) === 1 || Number(obj[key]) % 2 !== 0) {
        result = key;
      }
    }  
    return +result;
}