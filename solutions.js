/* =====================================

                8 Kyu

======================================== */

// // Function 1 - Hello World
// function greet() {
//     return `hello world!`;
// }
// console.log(greet());





// // Convert a Boolean to a String
// function booleanToString(b){
//     return b.toString();
// }

// console.log(booleanToString(true));





// // Convert Boolean Values to Strings 'Yes' or 'No'
// function boolToWord( bool ){
//     return bool ? "Yes" : "No";
// }

// console.log(boolToWord(false));




// // Remove First and Last Character
// function removeChar(str){
//     return str.length < 2 ? '' : str.slice(1, str.length - 1);
// };
// console.log(removeChar('Foo Bar'));




// // String Repeat
// function repeatStr(n, s) {
//     return s.repeat(n);
// }
// console.log(repeatStr(3, 'Hello '));




// // Sum Mixed Array
// function sumMix(x) {
//     return x.reduce((sum, current) => sum + parseInt(current), 0);
// }
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));




// // Convert a number to a String!
// function numberToString(num) {
//     return num.toString();
// }
// console.log(10);




// // You Can't Code Under Pressure #1
// function doubleInteger(i) {
//     return i * 2;
// }
// console.log(doubleInteger(2));




// // Convert a String to a Number!
// const stringToNumber = function(str){
//     return Number(str);
// }
// console.log(stringToNumber('355'));




// // How Good Are You Really?
// function betterThanAverage(classPoints, yourPoints) {
//     let classAvg = classPoints.reduce((sum, current) => sum + current, 0) / classPoints.length;
//     return classAvg < yourPoints ? true : false;
// }
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));




// // Sum of Positive
// function positiveSum(arr) {
//     return arr.filter(num => {
//       return num > 0;
//     }).reduce((sum, current) => sum + current, 0);
// }
// console.log(positiveSum([1,-22,3,4,5]));




// // Are You Playing Banjo?
// function areYouPlayingBanjo(name) {
//     return name.charAt(0) === 'R' || name.charAt(0) === 'r' ? name + ' plays banjo' : name + ' does not play banjo';
// }
// console.log(areYouPlayingBanjo('Ringo'));




// // Multiply
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(10, 3));




// // Even or Odd
// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }
// console.log(evenOrOdd(15));




// // Opposite Number
// function opposite(number) {
//     return -number;
// }
// console.log(opposite(10));




// // Reversed Strings
// function solution(str) {
//     return str.split('').reverse().join('');
// }
// console.log(solution('Hello World'));




// // Return Negative
// function makeNegative(num) {
//     return -Math.abs(num);
// }
// console.log(makeNegative(10));




// // Find the Smallest Integer in the Array
// class SmallestIntegerFinder {
//     findSmallestInt(arr) {
//       return Math.min(...arr);
//     }
// }

// const sif = new SmallestIntegerFinder();
// console.log(sif.findSmallestInt([78,3,232,12,8]));




// // Square(n) Sum
// function squareSum(numbers){
//     return numbers.map(num => Math.pow(num, 2)).reduce((sum, current) => sum + current, 0);
// }
// console.log(squareSum([2, 4, 6]));




// // Remove String Spaces
// function noSpace(x){
//     return x.split('').filter(digit => digit !== ' ').join('');
// }
// console.log(noSpace('Removing the spaces from this string.'));




// // Grasshopper Summation
// var summation = function (num) {
//     // Code here
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//       result += i;
//     }
//     return result;
// }
// console.log(summation(8));




// // Counting Sheep...
// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(sheep => sheep).length;
// }
// var array1 = [true,  true,  true,  false, true,  true,  true,];
// console.log(countSheeps(array1));




// // Keep Hydrated!
// function litres(time) {
//     return Math.floor(0.5 * time);
// }
// console.log(litres(12.3));




// // Returning Strings
// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet('Beto'));




// // Basic Mathematica Operations
// function basicOp(operation, value1, value2)
// {
//   switch (operation) {
//       case '+':
//         return value1 + value2;
//         break;
//       case '-':
//         return value1 - value2;
//         break;
//       case '*':
//         return value1 * value2;
//         break;
//       case '/':
//         return value1 / value2;
//         break;
//   }
// }
// console.log(basicOp('+', 2, 2));




// Convert Number to Reversed Array of Digits
function digitize(n) {
    return n.toString().split('').reverse().map(num => Number(num));
}
console.log(digitize(10));