// Divide and Conquer 

// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
    const num1 = x.filter(num => typeof num === 'number').reduce((sum, curr) => sum + curr, 0);
    const num2 = x.filter(num => typeof num === 'string').reduce((sum, curr) => sum + +curr, 0);
    return num1 - num2;
}