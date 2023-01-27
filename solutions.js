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
// function basicOp(operation, value1, value2) {
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




// // Convert Number to Reversed Array of Digits
// function digitize(n) {
//     return n.toString().split('').reverse().map(num => Number(num));
// }
// console.log(digitize(10));




// // Beginner - Lost Without a Map
// function maps(x){
//     return x.map(num => num * 2);
// }
// console.log(maps([1, 2, 3]));




// // Abbreviate a Two Word Name
// function abbrevName(name){
//     return name.split(' ').map(name => name[0].toUpperCase()).join('.');
// }
// console.log(abbrevName('Beto Guzman'));




// // MakeUpperCase
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase('Some String'));




// // Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//     if (n < 0 || m < 0) return 0;
//     return n * m;
// }
// console.log(paperwork(5, 5));




// // Sum Arrays
// function sum (numbers) {
//     "use strict";
//     return numbers.reduce((sum, current) => sum + current, 0);
// }
// console.log(sum([1, 5.2, 4, 0, -1]));





// // Invert Values
// function invert(array) {
//     return array.map(num => {
//       return num >= 0 ? -Math.abs(num) : Math.abs(num);
//     });
// }
// console.log(invert([-23, 3, 45, -1]));




// // You Only Need One - Beginner
// function check(a, x) {
//     // your code here
//     return a.includes(x) ? true : false;
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107));




// // Find Maximum and Minimum Values of a List
// var min = function(list){
//     return Math.min(...list);
// }

// var max = function(list){
//     return Math.max(...list);
// }
// console.log(min([42, 54, 65, 87, 0]));
// console.log(max([4,6,2,1,9,63,-134,566]));




// // Simple Multiplication
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }
// console.log(simpleMultiplication(8));




// // Is He Gonna Survive?
// function hero(bullets, dragons){
//     return (bullets / 2) >= dragons ? true : false;
// }
// console.log(hero(8, 6));




// // Will You Make It?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft
// };
// console.log(zeroFuel(100, 50, 1));




// // Beginner - Reduce But Gro
// function grow(x){
//     return x.reduce((mult, current) => mult * current);
// }
// console.log(grow([4, 1, 1, 1, 4]));




// // Convert String to Array
// function stringToArray(string){
//     return string.split(' ');
// }
// console.log(stringToArray('I love arrays they are my favorite'));




// // Sentence Smash
// function smash(words) {
//     return words.join(' ');
// };
// console.log(smash(["hello", "amazing", "world"]));



// // Count by X
// function countBy(x, n) {
//     let z = [];
//     for (let i = x; i <= x * n; i += x) {
//       z.push(i);
//     }
//     return z;
// }
// console.log(countBy(2,10));




// // Total Amount of Points
// function points(games) {
//     return games.reduce((sum, [s1, ,s2]) => {
//       if (s1 > s2) {
//         return sum += 3;
//       } else if (s1 === s2) {
//         return sum += 1;
//       } else {
//           return sum += 0;
//       }
//     }, 0);
// }
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));




// // Count the Monkeys!
// function monkeyCount(n) {
//     const monkeys = [];
//     for (let i = 1; i <= n; i++) {
//         monkeys.push(i);
//     }
//     return monkeys;
// }
// console.log((monkeyCount(10)));




// // Removing Elements
// function removeEveryOther(arr){
//     const final = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0) final.push(arr[i]);
//     }
//     return final;
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));




// // Array Plus Array
// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((sum, current) => sum + current, 0) + arr2.reduce((sum, current) => sum + current, 0);
// }
// console.log(arrayPlusArray([1,2,3], [1,2,3]));




// // I Love You, A Little, A Lot, Passionately ... Not At All
// function howMuchILoveYou(nbPetals) {
//     const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//     let phraseCurrent = 0;
//     let result = '';
//     for (let i = 0; i < nbPetals; i++) {
//       if (phraseCurrent >= phrase.length) {
//         phraseCurrent = 0;
//       } 
//       result = phrase[phraseCurrent];
//       phraseCurrent++;
//     }
//     return result;
// }
// console.log(howMuchILoveYou(8));




// // Sort and Star
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
// }
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));




// // Filter Out The Geese
// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     // return an array containing all of the strings in the input array except those that match strings in geese
//     return birds.filter(word => !(geese.includes(word)));
// }
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));




// // If You Can't Sleep, Just Count Sheep!
// var countSheep = function (num){
//     let count = '';
//     for (let i = 1; i <= num; i++) {
//       count += `${i} sheep...`;
//     }
//     return count;
// }
// console.log(countSheep(3));




// // Calculate BMI
// function bmi(weight, height) {
//     const bmiCalculation = weight / Math.pow(height, 2);
    
//     if (bmiCalculation <= 18.5) {
//       return 'Underweight'; 
//     } else if (bmiCalculation <= 25.0) {
//       return 'Normal';
//     } else if (bmiCalculation <= 30.0) {
//       return 'Overweight';
//     } else {
//       return 'Obese';
//     }
// }
// console.log(bmi(80, 1.80));




// // Find Multiples of a Number
// function findMultiples(integer, limit) {
//     //your code here
//     const result = [];
//     for (let i = integer; i <= limit; i += integer) {
//       result.push(i);
//     }
//     return result;
// }
// console.log(findMultiples(5, 25));




// // Well of Ideas - Easy Version
// function well(x){
//     const counts = x.filter(idea => idea === 'good');
//     if (counts.length === 0) {
//       return 'Fail!';
//     } if (counts.length <= 2) {
//       return 'Publish!';
//     } else if (counts.length >= 2) {
//       return "I smell a series!";
//     }
// }
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));




// // Remove Duplicates From List
// function distinct(a) {
//     const result = [];
//     for (let i = 0; i < a.length; i++) {
//       !result.includes(a[i]) ? result.push(a[i]) : '';
//     }
//     return result;
// }
// console.log(distinct([1,1,2]));




// // Rock Paper Scissors
// const rps = (p1, p2) => {
//     if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors')) {
//       return 'Player 1 won!';
//     } else if (p1 === p2) {
//       return 'Draw!';
//     } else {
//       return 'Player 2 won!';
//     }
// };
// console.log(rps('rock', 'scissors'));




// // Merge Two Sorted Arrays Into One
// function mergeArrays(arr1, arr2) {
//     const result = [];
//     arr1.concat(arr2).map(num => {
//       if (!result.includes(num)) result.push(num);
//     });
//     return result.sort((a, b) => a - b);
// }
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));




// // Printing Array Elements with Comma Delimeters
// function printArray(array){
//     return array.join(',');
// }
// console.log(printArray(["h","o","l","a"]));




// // A Needle in the Haystack
// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`;
// }
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));




// // Count of Positives / Sum of Negatives
// function countPositivesSumNegatives(input) {
//     let positive = 0;
//     let negative = 0;
    
//     if (input === null || input.length === 0) return [];
//     input.forEach(num => num > 0 ? positive += 1 : negative += num);
//     return [positive, negative];
//   }
//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));




// // Fake Binary
// function fakeBin(x){
//     return x.split('').map(digit => digit < 5 ? digit = 0 : digit = 1).join('');
// }
// console.log(fakeBin('45385593107843568'));