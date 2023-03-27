// Largest Elements 

// DESCRIPTION:
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) {
    return n === 0 ? [] : array.sort((a, b) => a - b).slice(-n);
}