// Sum of Odd Cubed Numbers 

// DESCRIPTION:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) { 
    const result = arr.filter(num => num % 2 !== 0).map(num => num ** 3).reduce((sum, curr) => sum + curr, 0);
    return isNaN(result) ? undefined : result;
}