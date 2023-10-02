/* =====================================

                8 Kyu

======================================== */

// const { deepEqual } = require("assert");

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




// // DNA to RNA Conversion
// function DNAtoRNA(dna) {
//     return dna.split('').map(n => n === 'T' ? n = 'U' : n = n).join('');
// }
// console.log(DNAtoRNA('GCAT'));




// // Calculate Average
// function findAverage(array) {
//     return array.length === 0 ? 0 : array.reduce((sum, current) => sum + current, 0) / array.length;
// }
// console.log(findAverage([1,2,3,4]));




// // Opposites Attract
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2 ? true : false;
// }
// console.log(lovefunc(1,4));




// // Reversed Sequence
// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i > 0; i--) {
//       result.push(i);
//     }
//     return result;
// };
// console.log(reverseSeq(5));




// // Is The String Uppercase?
// String.prototype.isUpperCase = function() {
//     return this.toString() === this.toUpperCase();
// }
// console.log('hello I am DONALD!'.isUpperCase());




// // Remove Exclamation Marks
// function removeExclamationMarks(s) {
//     return s.split('').filter(letter => letter !== '!').join('');
// }
// console.log(removeExclamationMarks('Hello World!!!'));




// // Double Char
// function doubleChar(str) {
//     return str.split('').map(letter => letter += letter).join('');
// }
// console.log(doubleChar('abcd'));




// // Color Ghost
// var Ghost = function() {
//     let colors = ['white', 'yellow', 'purple', 'red'];
//     let random = Math.floor(Math.random() * 4);
//     // your code goes here
//     this.color = colors[random];
// };
// const ghost = new Ghost();
// console.log(ghost.color);




// // Swap Values
// function swapValues(args) {
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
//     return args;
// }
// console.log(swapValues([2,3]));




// // Transportation on Vacation
// function rentalCarCost(d) {
//     // Your solution here
//     let calc = d * 40;

//     if (d >= 7) {
//       return calc -= 50;
//     } else if (d >= 3) {
//       return calc -= 20;
//     } else {
//       return calc;
//     }
// }
// console.log(rentalCarCost(3));




// // Area or Perimeter
// const areaOrPerimeter = function(l , w) {
//     // Return your answer
//     return l === w ? l * w : (l + w) * 2;
// };
// console.log(areaOrPerimeter(3, 3));




// // Grasshopper - Personalized Message
// function greet(name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
// }
// console.log(greet('Greg', 'Danie'));




// // All Star Code Challenge #18
// function strCount(str, letter){
//     let count = 0;
//     str.split('').forEach(l => {
//       if (l === letter) count++;
//     });
//     return count;
// }
// console.log(strCount('Hello', 'l'));




// // Name Shuffler
// function nameShuffler(str){
//     return str.split(' ').reverse().join(' ');
// }
// console.log(nameShuffler('john McClane'));




// // The Feast of Many Beasts
// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
// }
// console.log(feast('great blue heron', 'garlic naan'));




// // Correct the Mistakes of the Character Recognition Software
// function correct(string) {
//     return string.split('').map(letter => {
//       if (letter === '5') {
//         return letter = 'S';
//       } else if (letter === '0') {
//         return letter = 'O';
//       } else if (letter === '1') {
//         return letter = 'I';
//       } else {
//         return letter;
//       }
//     }).join('');
// }
// console.log(correct('L0ND0N'));




// // Vowel Remover
// function shortcut(string) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return string.split('').filter(letter => !vowels.includes(letter)).join('');
// }
// console.log(shortcut('how are you today?'));




// // The Wide-Mouthed Frog!
// function mouthSize(animal) {
//     return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
// }
// console.log(mouthSize('toucan'));




// // Reversing Words in a String
// function reverse(string){
//     return string.split(' ').reverse().join(' ');
// }
// console.log(reverse('I am an expert at this'));




// // String Cleaning
// function stringClean(s){
//     return s.replace(/[0-9]/g, '');
// }
// console.log(stringClean('This looks5 great8!'));




// // Exclamation Marks Series #1: Remove an Exclamation Mark From the End of String
// function remove(string) {
//     return string.endsWith('!') ? string.slice(0, string.length - 1) : string;
// }
// console.log(remove('Hello!'));




// // Welcome to the City
// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
// }
// console.log(sayHello(['John', 'Smit'], 'Phoenix', 'Arizona'));




// // Grasshopper - Array Mean
// var findAverage = function (nums) {
//     return nums.reduce((sum, current) => sum + current, 0) / nums.length;
// }
// console.log(findAverage([1, 3, 5, 7]));




// // Simple Comparison
// function add(a, b){
//   return a == b ? true : false;
// }
// console.log(add('11', 11));




// // ES6 String Addition
// function joinStrings(string1, string2){
//    return `${string1} ${string2}`;
// }
// console.log(joinStrings('testing', 'testing'));




// // Remove First and Last Character Part Two
// function array(arr){
//     if (arr === '') return null;
//     const convert = arr.split(',');
//     convert.pop();
//     convert.shift();
//     return convert.join(' ') === '' ? null : convert.join(' ');
// }
// console.log(array('1,2,3,4,5'));




// // Define a Card Suit
// function defineSuit(card) {
//     if (card.endsWith('\u2663')) {
//       return 'clubs';
//     } else if (card.endsWith("\u2660")) {
//       return 'spades';
//     } else if (card.endsWith("\u2665")) {
//       return 'hearts';
//     } else if (card.endsWith("\u2666")) {
//       return 'diamonds';
//     }
// }
// console.log(defineSuit('Q♠'));




// // Is There a Vowel in There?
// function isVow(a){
//     return a.map(digit => {
//       if (digit === 97) {
//         return digit = 'a';
//       } else if (digit === 101) {
//         return digit = 'e';
//       } else if (digit === 105) {
//         return digit = 'i';
//       } else if (digit === 111) {
//         return digit = 'o';
//       } else if (digit === 117) {
//         return digit = 'u';
//       } else {
//         return digit;
//       }
//     })
// }
// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));




// // Template Strings
// var TempleStrings = function(obj, feature) {
//     return `${obj} are ${feature}`
// }
// console.log(TempleStrings('Animals', 'Good'));




// // Name On Billboard
// function billboard(name, price = 30){
//     let cost = 0;
//     for (let i = 0; i < name.length; i++) {
//       cost += price;
//     }
//     return cost;
// }
// console.log(billboard('Warner Vigi', 15));




// // UEFA EURO 2016
// function uefaEuro2016(teams, scores){
//     return scores[0] === scores[1] ?
//       `At match ${teams[0]} - ${teams[1]}, teams played draw.` :
//       `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? teams[0] : teams[1]} won!`;
// }
// console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));

// // Pick a Set of First Elements
// function first(arr, n = 1) {
//     return arr.slice(0, n);
// }
// console.log(first(['a', 'b', 'c', 'd', 'e'], 2));




// // Quarter of the Year
// const quarterOf = (month) => {
//     // Your code here
//     if (month >= 1 && month <= 3) {
//       return 1;
//     } else if (month >= 4 && month <= 6) {
//       return 2;
//     } else if (month >= 7 && month <= 9) {
//       return 3;
//     } else {
//       return 4;
//     }
// }
// console.log(quarterOf(3));




// // 'this' a Problem
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.name = this.firstName + ' ' + this.lastName;
// }
// const n = new NameMe('John', 'Doe');
// console.log(n.name);




// // Reverse Words
// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }
// console.log(reverseWords('hello world!'));




// // Do I Get a Bonus?
// function bonusTime(salary, bonus) {
//    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
// }
// console.log(bonusTime(10000, true));




// // Short Long Short
// function solution(a, b) {
//     return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
// }
// console.log(solution('13', '200'));




// // Capitalization and Mutability
// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.substring(1);
// }
// console.log(capitalizeWord('word'));




// // Stringy Strings (NEEDS REFACTORING)
// function stringy(size) {
//     if (typeof size !== 'number' || size < 0) return;
//     let finalStringy = '';
//     for (let i = 1; i <= size; i++) {
//         if (i % 2 === 0) {
//             finalStringy += '0';
//         } else {
//             finalStringy += '1';
//         }
//     }
//     return finalStringy;
// }
// console.log(stringy(6))




// // Dollars and Cents
// function formatMoney(amount){
//     return `$${amount.toFixed(2)}`;
// }
// console.log(formatMoney(39.99));




// // Count Words
// function countWords(str) {
//     return str.replace(/\s/g, ' ').split(' ').filter(item => item !== '').length;
// }
// console.log(countWords('Hello﻿World '));




// // Crash Override (Refactor)
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', M: 'Malware'};
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst', S: 'Spy'};




// function aliasGen(first, last){
//     const regEx = /^[a-zA-Z]/;
//     if (regEx.test(first) === false || regEx.test(last) === false) {
//         return 'Your name must start with a letter from A - Z.';
//     }
//     return firstName[`${first[0].toUpperCase()}`] + ' ' + surname[`${last[0].toUpperCase()}`];
// }
// console.log(aliasGen('Malware', 'Spy'));




// // Grade Book
// function getGrade (s1, s2, s3) {
//     const avg = (s1 + s2 + s3) / 3;

//     if (avg >= 90 && avg <= 100) {
//         return 'A';
//     } else if (avg >= 80 && avg < 90) {
//         return 'B';
//     } else if (avg >= 70 && avg < 80) {
//         return 'C';
//     } else if (avg >= 60 && avg < 70) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
// console.log(getGrade(95,90,93));




// // Get the Mean of an Array
// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, curr) => sum + curr, 0) / marks.length);
// }
// console.log(getAverage([2,2,2,2]));




// // My Head is at the Wrong End!
// function fixTheMeerkat(arr) {
//     return arr.reverse();
// }
// console.log(fixTheMeerkat(['tail', 'body', 'head']));




// // N-th Power
// function index(array, n){
//     return array.length > n ? array[n] ** n : -1;
// }
// console.log(index([1, 3, 10, 100],3));




// // Find Numbers Which Are Divisible by Given Number
// function divisibleBy(numbers, divisor){
//     return numbers.filter(num => num % divisor === 0);
// }
// console.log(divisibleBy([1,2,3,4,5,6], 2));




// // Who is Going to Pay for the Wall?
// function whoIsPaying(name){
//     return name.length <= 2 ? [name] : [name, name.slice(0,2)];
// }
// console.log(whoIsPaying('Mexico'));




// // Alan Partridge II - Apple Turnover
// function apple(x) {
//     return x ** 2 >= 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`;
// }
// console.log(apple('50'));




// // Safe User Input Part 1 - htmlspecialchars
// function htmlspecialchars(formData) {
//     return formData.replace(/&/g, "&amp;")
//                 .replace(/"/g, "&quot;")
//                 .replace(/</g, "&lt;")
//                 .replace(/>/g, "&gt;");
// }
// console.log(htmlspecialchars('<h2>Hello World</h2>'))




// // Take an Arrow to the Knee, Functionally
// var ArrowFunc = function(arr) {
//     return arr.map(num => String.fromCharCode(num)).join(''); //Complete this function
// }
// console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));




// // Get Number From String
// function getNumberFromString(s) {
//     const result = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             continue;
//         } else if (Number(s[i]) >= 0) {
//             result.push(s[i]);
//         }
//     }
//     return Number(result.join(''));
// }
// console.log(getNumberFromString('this is number: 7'));
// console.log(getNumberFromString('$100 000 000'));




// // Contamination #1 - String
// function contamination(text, char){
//     return text.length === 0 ? '' : [...text].map(letter => letter = char).join('');
// }
// console.log(contamination('abc', ''));
// console.log(contamination('', 'z'));

// // A Wolf in Sheep's Clothing
// function warnTheSheep(queue) {
//     if (queue[queue.length - 1] === 'wolf') {
//         return 'Pls go away and stop eating my sheep';
//     } else {
//         const wolf = queue.indexOf('wolf');
//         return `Oi! Sheep number ${(queue.length - wolf) - 1}! You are about to be eaten by a wolf!`;
//     }
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));




// // No Loops 2 - You Only Need One
// function check(a, x){
//     return a.includes(x) ? true : false;
// }
// console.log(check([66, 101], 66))




// // Arguments to Binary Addition
// function arr2bin(arr) {
//     return arr.filter(entry => typeof entry === 'number').reduce((sum, curr) => sum + curr, 0).toString(2);
// }
// console.log(arr2bin([true, true, false, 15]));




// // Pluck
// function pluck(objs, name) {
//     return objs.map(i => i.hasOwnProperty(name) ? i[name] : undefined);
// }
// console.log(pluck([{a:1}, {a:2}], 'a'));
// console.log(pluck([{a:1, b:3}, {a:2}], 'b'));




// // makeBackronym
// const dict = {
//     A: 'awesome',
//     B: 'beautiful',
//     C: 'confident',
//     D: 'disturbing',
//     E: 'eager',
//     F: 'fantastic',
//     G: 'gregarious',
//     H: 'hippy',
//     I: 'ingestable',
//     J: 'joke',
//     K: 'klingon',
//     L: 'literal',
//     M: 'mustache',
//     N: 'newtonian',
//     O: 'oscillating',
//     P: 'perfect',
//     Q: 'queen',
//     R: 'rant',
//     S: 'stylish',
//     T: 'turn',
//     U: 'underlying',
//     V: 'volcano',
//     W: 'weird',
//     X: 'xylophone',
//     Y: 'yogic',
//     Z: 'zero'
// }




// var makeBackronym = function(string){
//     return string.toUpperCase().split('').map(l => {
//         return dict[l];
//     }).join(' ');
// };
// console.log(makeBackronym('dgm'));




// // Multiple of Index
// function multipleOfIndex(array) {
//     return array.filter((n, i) => n === 0 || n % i === 0);
// }
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));




// // String Templates - Bug Fixing #5
// function buildString(...args) {
//     return `I like ${args.join(', ')}!`;
// }
// console.log(buildString('Cheese', 'Milk', 'Chocolate'));




// // Factorial
// function factorial(n) {
//     if (n < 0 || n > 12) throw new RangeError('Number must not be below 0 or more than 12.');

//     let current = 1;
//     for (let i = 0; i < n; i++) {
//         current = current * (i + 1);
//     }
//     return current;
// }
// console.log(factorial(5));




// // Reverse List Order
// function reverseList(list) {
//     return list.reverse();
// }
// console.log(reverseList([1,2,3,4]));




// // Grasshopper - Debug Say Hello
// function sayHello(name) {
//     return `Hello, ${name}`;
// }
// console.log(sayHello('Mr. Spock'));




// // Parse Nice Int from Char Problem
// function getAge(inputString){
//     // return the girl's correct age as an integer. Happy coding :)
//     return Number(inputString[0])
// }




// // 5 Without Numbers!!
// function unusualFive() {
//     return ".....".length;
// }




// // Powers of 2
// function powersOfTwo(n) {
//     const result = [];
//     for(let i = 0; i <= n; i++) {
//       result.push(2 ** i);
//     }
//     return result;
// }




// // Money, Money, Money
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   while (principal < desired) {
//     principal += (principal * interest) - (principal * interest * tax)
//     years++;
//   }
//   return years;
// }
// console.log(calculateYears(1000,0.01625,0.18,1200));




// // No Zeros for Heros
// function noBoringZeros(n) {
//   let nStr = String(n).split('');
//   for (let i = nStr.length - 1; i >= 0; i--) {
//     if (nStr[i] === '0') {
//       nStr.pop();
//     } else {
//       break;
//     }
//   }
//   return +nStr.join('');
// }
// // console.log(noBoringZeros(960000));
// console.log(noBoringZeros(1050));




// // Grasshopper - Messi Goals
// let laLigaGoals = 43;
// let championsLeagueGoals = 10;
// let copaDelReyGoals = 5;

// let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;




// // Grasshopper - Terminal Game Combat Function
// function combat(health, damage) {
//     const newHealth = health - damage;
//     return newHealth <= 0 ? 0 : newHealth;
// }
// console.log(combat(100, 5));




// // Enumerable Magic #25 - Take the First N Elements
// function take(arr, n) {
//     return arr.slice(0, n);
// }
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3));




// // Hello, Name or World!
// function hello(name) {
//     return !name ? `Hello, World!` : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
// }
// console.log(hello());
// console.log(hello(''));
// console.log(hello('BEto'));




// // Plural
// function plural(n) {
//     return n === 1 ? false : true;
// }
// console.log(plural(0));
// console.log(plural(1));




// // Keep Up The Hoop
// function hoopCount(n) {
//     return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
// }
// console.log(hoopCount(3));




// // Hex to Decimal
// function hexToDec(hexString) {
//     return parseInt(hexString, 16);
// }
// console.log(hexToDec("a"));
// console.log(hexToDec("FF"));




// // Holiday VIII - Duty Free
// function dutyFree(normPrice, discount, hol){
//     return Math.floor(hol / (normPrice * (discount / 100)));
// }
// console.log(dutyFree(12, 50, 1000));




// // Grasshopper - Basic Function Fixer
// function addFive(num) {
//     return num + 5;
// }
// console.log(addFive(5));




// // Convert to Binary
// function toBinary(n){
//     return Number(n.toString(2));
// }
// console.log(toBinary(11));




// // Cat Years, Dog Years
// const humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0;
//     let dogYears = 0;

//     for (let i = 1; i <= humanYears; i++) {
//         if (i === 1) {
//             catYears += 15;
//             dogYears += 15;
//         } else if (i === 2) {
//             catYears += 9;
//             dogYears += 9;
//         } else {
//             catYears += 4;
//             dogYears += 5;
//         }
//     }

//     return [humanYears, catYears, dogYears];
// }
// console.log(humanYearsCatYearsDogYears(1));




// // Grasshopper - Check for Factor
// function checkForFactor (base, factor) {
//     return base % factor === 0;
// }

// // Drink About
// function peopleWithAgeDrink(old) {
//     switch (true) {
//         case old < 14:
//             return 'drink toddy';
//         case old < 18:
//             return 'drink coke';
//         case old < 21:
//             return 'drink beer';
//         default:
//             return 'drink whisky';
//     }
// }
// console.log(peopleWithAgeDrink(13));




// // Find the Reminder
// function remainder(n, m){
//     return n > m ? n % m : m % n;
// }
// console.log(remainder(17, 5));




// Fix Your Code Before The Garden Dies!
function rainAmount(mm){
    return mm<40 ?
        `You need to give your plant ${40-mm}mm of water`:
        `Your plant has had more than enough water for today!`
}













/* =====================================

                7 Kyu

======================================== */

// // Vowel Count
// function getCount(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//       str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ?
//         result += 1 : result += 0;
//     }
//     return result;
// }
// console.log(getCount('abracadabra'));




// // Ones and Zeros
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''), 2);
// };
// console.log(binaryArrayToNumber([0,1,1,0]));




// // Digit*Digit
// function squareDigits(num){
//     return Number(Array.from(String(num)).map(item => Number(item) ** 2).join(''));
// }
// console.log(squareDigits(2112));




// // Highest and Lowest
// function highAndLow(numbers){
//     const convertToNumbers = numbers.split(' ').map(num => Number(num));
//     return `${Math.max(...convertToNumbers)} ${Math.min(...convertToNumbers)}`;
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));




// // Shortest Word
// function findShort(s){
//     return convertToArray = s.split(' ').sort((a, b) => a.length - b.length)[0].length;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perahps'));




// // Get the Middle Character
// function getMiddle(s) {
//   let position = 0;
//   if (s.length % 2 === 1) {
//     position = Math.floor(s.length / 2);
//     return s.slice(position, position + (s.length % 2));
//   } else {
//     position = s.length / 2;
//     return s.slice(position - 1, position + 1)
//   }
// }
// console.log(getMiddle('testing'));




// // Descending Order
// function descendingOrder(n){
//     return Number(String(n).split('').sort((a, b) => b - a).join(''));
// }
// console.log(descendingOrder(123456789));




// // List Filtering
// function filter_list(l) {
//     return l.filter(num => typeof num === 'number');
// }
// console.log(filter_list([1, 'a', 'b', 0, 15]));




// // Isograms
// function isIsogram(str){
//     const lower = str.toLowerCase();
//     let flag = true;

//     for (let i = 0; i < lower.length; i++) {
//       if (lower.slice(i + 1).includes(lower[i])) {
//         flag = false;
//         break;
//       }
//     }
//     return flag;
// }
// console.log(isIsogram('Dermatoglyphics'));




// // Exes and Ohs
// function XO(str) {
//     //code here
//     const objLetters = str.toLowerCase().split('').reduce((obj, curr) => {
//       obj[curr] = (obj[curr] || 0) + 1;
//       return obj;
//     }, {});

//     return objLetters['x'] === objLetters['o'] ? true : false;
// }
// console.log(XO('xxOo'));




// // Jaden Casing Strings
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// };
// console.log('How can mirrors be real if our eyes aren\'t real'.toJadenCase());




// // Complementary DNA
// function DNAStrand(dna){
//     return dna.split('').map(digit => {
//         switch(digit) {
//             case 'A':
//                 return 'T';
//                 break;
//             case 'T':
//                 return 'A';
//                 break;
//             case 'G':
//                 return 'C';
//                 break;
//             case 'C':
//                 return 'G';
//                 break;
//         }
//     }).join('');
// }
// console.log(DNAStrand('ATTGC'));




// // Mumbling
// function accum(s) {
//     return s.toLowerCase().split('').map((letter, index) => letter.repeat(index + 1)).map(word => word[0].toUpperCase() + word.substr(1)).join('-');
// }
// console.log(accum('ZpglnRxqenU'));




// // Sum of Two Lowest Positive Integers
// function sumTwoSmallestNumbers(numbers) {
//     const sorted = numbers.sort((a, b) => a - b);
//     return sorted[0] + sorted[1];
// }

// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));




// // Credit Card Mask
// function maskify(cc) {
//     const masked = cc.slice(0, cc.length - 4).replace(/\w/g, '#');
//     const lastDigits = cc.slice(-4).split('').filter(digit => digit !== '#').join('');
//     return lastDigits.length === 3 ? lastDigits : masked + lastDigits;
// }
// console.log(maskify('4556364607935616'));
// console.log(maskify('##39i'));




// // Friend or Foe
// function friend(friends) {
//     return friends.filter(friend => friend.length === 4);
// }
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));




// // Growth of a Population
// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     while (p0 < p) {
//         p0 = Math.floor((1 + percent / 100) * p0 + aug);
//         years++;
//     }
//     return years;
// }
// console.log(nbYear(1500000, 2.5, 10000, 2000000));




// // Sum of Odd Numbers
// function rowSumOddNumbers(n) {
//     return n * n * n;
// }
// console.log(rowSumOddNumbers(169));




// // Disemvowel Trolls
// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');
// }
// console.log(disemvowel('This website is for losers LOL'));




// // String Ends With?
// function solution(str, ending) {
//     return str.endsWith(ending);
// }
// console.log(solution('abcde', 'cde'));




// // Reverse Words
// function reverseWords(str) {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));




// // Anagram Detection (USED SORT)
// var isAnagram = function(test, original) {
//     return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
// }
// console.log(isAnagram('foefet', 'toffee'));




// // Remove Anchor From URL
// function removeUrlAnchor(url){
//     return url.includes('#') ? url.substring(0,url.indexOf('#')) : url;
// }
// console.log(removeUrlAnchor('www.codewars.com/katas/'));
// console.log(removeUrlAnchor('www.codewars.com#about'));




// // Find the Capitals (REFACTOR)
// var capitals = function (word) {
// 	return word.split('').map((letter, index) => {
//         if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
//             return index;
//         }
//     }).filter(value => value !== undefined);
// };
// console.log(capitals('CodEWaRs'));




// // The Coupon Code
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     return enteredCode !== correctCode || Date.parse(currentDate) > Date.parse(expirationDate) ? false : true;
// }
// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
// console.log(checkCoupon('123a','123','July 5, 2014','October 1, 2014'));




// // Alternate Capitalization
// function capitalize(s){
//     return [
//         s.split('').map((letter, index) => {
//             return index % 2 === 0 ? letter.toUpperCase() : letter;
//         }).join(''),
//         s.split('').map((letter, index) => {
//             return index % 2 !== 0 ? letter.toUpperCase() : letter;
//         }).join('')
//     ];
// };
// console.log(capitalize('abcdef'));




// // Number of Decimal Digits
// function digits(n) {
//     return n.toString().length;
// }
// console.log(digits(9876543210));




// // Remove Duplicate Words (REFACTOR WITH A SET?)
// function removeDuplicateWords (s) {
//     const unique = [];
//     s.split(' ').filter(word => {
//         if (!unique.includes(word)) unique.push(word);
//     });
//     return unique.join(' ');
// }
// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));




// // Greet Me
// var greet = function(name) {
//     return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
// };
// console.log(greet('riley'));




// // Sort the Gift Code
// function sortGiftCode(code){
//     return code.split('').sort().join('');
// }
// console.log(sortGiftCode('abcdef'));




// // Bumps in the Road
// function bump(x){
//     return x.split('').filter(letter => letter === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
// }
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));




// // Digits Explosion
// function explode(s) {
//     return s.split('').map(num => num.repeat(num)).join('');
// }
// console.log(explode('312'));




// // Switcheroo
// function switcheroo(x) {
//     return x.split('').map(letter => {
//         if (letter === 'a') return letter = 'b';
//         else if (letter === 'b') return letter = 'a';
//         else return letter;
//     }).join('');
// }
// console.log(switcheroo('aaabcccbaaa'));




// // Alphabet War
// function alphabetWar(fight) {
//     let leftCount = fight.split('').map(letter => ['s', 'b', 'p', 'w'].indexOf(letter) + 1).reduce((sum, val) => sum + val, 0);
//     let rightCount = fight.split('').map(letter => ['z', 'd', 'q', 'm'].indexOf(letter) + 1).reduce((sum, val) => sum + val, 0);

//     if (leftCount === rightCount) {
//         return `Let's fight again!`;
//     } else if (leftCount > rightCount) {
//         return `Left side wins!`;
//     } else {
//         return `Right side wins!`;
//     }
// }
// console.log(alphabetWar('wpbszz'));




// // Most Digits (REFACTOR)
// function findLongest(array){
//     let num = '';
//     for (let i = 0; i < array.length; i++) {
//         if (String(array[i]).length > num.length) {
//             num = String(array[i]);
//         }
//     }
//     return Number(num);
// }
// console.log(findLongest([1, 10, 100, 456563, 785633]));




// // Coding Meetup #1 - Higher-Order Functions Series - Count the Number of JS Devs Coming From Europe
// const list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// function countDevelopers(list) {
//     return list.filter(obj => obj.continent === 'Europe' && obj.language === 'JavaScript').length;
// }

// console.log(countDevelopers(list1));




// // Filter The Number
// var filterString = function(value) {
//     return Number(value.split('').filter(item => !isNaN(item)).join(''));
// }
// console.log(filterString('db8d1b5149a0371b2b603095d969c1ac'));




// // Stop gninnipS My sdroW!
// function spinWords(string){
//     return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
// }
// console.log(spinWords('Hey fellow warriors'));




// // Odd or Even?
// function oddOrEven(array) {
//     return array.reduce((sum, current) => sum + current, 0) % 2 === 0 ? 'even' : 'odd';
// }
// console.log(oddOrEven([0, 1, 5]));




// // The Highest Profit Wins!
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)]; // fix me!
// }
// console.log(minMax([2334454, 5]));




// // Bulding Strings From a Hash
// function solution(pairs) {
//     return Object.keys(pairs).map(key => `${key} = ${pairs[key]}`).join(',');
// }
// console.log(solution({a: 1, b: '2'}))




// // Two to One
// function longest(s1, s2) {
//     const unique = new Set([...s1, ...s2]);
//     return Array.from(unique).sort().join('');
// }
// console.log(longest("aretheyhere", "yestheyarehere"));




// // Nickname Generator
// function nicknameGenerator(name){
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     if (name.length <= 3) {
//         return `Error: Name too short`;
//     } else if (vowel.includes(name[2])) {
//         return name.slice(0,4);
//     } else {
//         return name.slice(0,3);
//     }
// }
// console.log(nicknameGenerator('Jimmy'));
// console.log(nicknameGenerator('Sam'));
// console.log(nicknameGenerator('Jeannie'));




// // Testing 1-2-3
// var number = function(array){
//     if (array.length === 0) return [];
//     return array.map((digit, i) => `${i+1}: ${digit}`);
// }
// console.log(number(["a", "b", "c"]));




// // Remove the Minimum
// function removeSmallest(numbers) {
//     const clone = [...numbers];
//     const index = clone.indexOf(Math.min(...clone));
//     clone.splice(index, 1);
//     return clone;
// }
// console.log(removeSmallest([5, 3, 2, 1, 4]));




// // Don't Give Me Five!
// function dontGiveMeFive(start, end) {
//     const finalArr = [];
//     for (let i = start; i <= end; i++) {
//         if (!String(i).includes(5)) finalArr.push(i);
//     }
//     return finalArr;
// }
// console.log(dontGiveMeFive(1, 9));
// console.log(dontGiveMeFive(4, 17));




// // Sort Array by String Length
// function sortByLength(array) {
//     return array.sort((a, b) => a.length - b.length);
// }
// console.log(sortByLength(['Beg', 'Life', 'I', 'To']));




// // Small Enough?
// function smallEnough(a, limit){
//     return Math.max(...a) > limit;
// }
// console.log(smallEnough([66, 101], 200));




// // Two Oldest Ages
// function twoOldestAges(ages) {
//     return ages.sort((a, b) => a - b).slice(-2);
// }
// console.log(twoOldestAges([6,5,83,5,3,18]));




// // No Oddities Here
// function noOdds(values){
//     return values.filter(num => num % 2 === 0);
// }
// console.log(noOdds([0,1,2,3]));




// // Odd-Even String Sort
// function sortMyString(s) {
//     return `${[...s].filter((l, i) => i % 2 === 0).join('')} ${[...s].filter((l, i) => i % 2 !== 0).join('')}`;
// }
// console.log(sortMyString('CodeWars'));




// // Find the Middle Element
// function gimme (triplet) {
//     let middleValue = [...triplet].sort((a,b) => a - b)[1];
//     return triplet.indexOf(middleValue);
// }
// console.log(gimme([2, 3, 1]));




// // Check the Exam
// function checkExam(array1, array2) {
//     let score = array1.map((g, i) => {
//         if (array2[i] === '') {
//             return 0;
//         } else if (g === array2[i]) {
//             return 4;
//         } else {
//             return -1;
//         }
//     }).reduce((sum, curr) => sum + curr, 0);
//     return score < 0 ? 0 : score;
// }
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))




// // Fizz Buzz
// function fizzbuzz(n) {
//     const finalArr = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             finalArr.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             finalArr.push('Fizz');
//         } else if (i % 5 === 0) {
//             finalArr.push('Buzz');
//         } else {
//             finalArr.push(i);
//         }
//     }
//     return finalArr;
// }
// console.log(fizzbuzz(10));




// Binary Addition
// function addBinary(a,b) {
//     return (a + b).toString(2);
// }
// console.log(addBinary(5,9));




// // JavaScript Array Filter
// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(num => num % 2 === 0);
// }
// console.log(getEvenNumbers([2,4,5,6]));




// // Flatten and Sort an Array
// "use strict";

// function flattenAndSort(array) {
//   return array.flat().sort((a,b) => a - b);
// }
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));




// // All Unique (REFACTOR WITH SET)
// function hasUniqueChars(str){
//     return [...str].map(letter => str.indexOf(letter) === str.lastIndexOf(letter)).includes(false) ? false : true;
// }
// console.log(hasUniqueChars('abcdef'));
// console.log(hasUniqueChars("  nAa"));




// // Sum of Minimums!
// function sumOfMinimums(arr) {
//     return arr.map(numArr => Math.min(...numArr)).reduce((sum, curr) => sum + curr, 0);
// }
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));




// // Row Weights
// function rowWeights(array){
//     return [
//         array.filter((num, index) => index % 2 === 0).reduce((sum, curr) => sum + curr, 0),
//         array.filter((num, index) => index % 2 !== 0).reduce((sum, curr) => sum + curr, 0)
//     ]
// }
// console.log(rowWeights([100,50]));




// // Sorted? Yes? No? How?
// function isSortedAndHow(array) {
//     if (JSON.stringify([...array].sort((a,b) => a - b)) === JSON.stringify(array)) {
//         return 'yes, ascending';
//     } else if (JSON.stringify([...array].sort((a,b) => b - a)) === JSON.stringify(array)) {
//         return 'yes, descending';
//     } else {
//         return 'no';
//     }
// }
// console.log(isSortedAndHow([1, 2]));
// console.log(isSortedAndHow([15, 7, 3, -8]));
// console.log(isSortedAndHow([4, 2, 30]));




// // Sort Arrays - 1
// sortme = function(names){
//     return names.sort();
// }
// console.log(sortme(['one', 'two', 'three']));




// // Head, Tail, Init and Last
// function head(arr) {
//     return [...arr][0];
// }

// function last(arr) {
//     return [...arr][arr.length - 1];
// }

// function tail(arr) {
//     return [...arr].slice(1);
// }

// function init(arr) {
//     return [...arr].slice(0, arr.length - 1);
// }

// console.log(head([5,1]));
// console.log(last([7,2]));
// console.log(tail([1]));
// console.log(init([1,4,7,9]));




// // Even Number in an Array (NEEDS REFACTORING)
// function evenNumbers(array, number) {
//     return array.filter(num => num % 2 === 0).splice(-number);
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));




// // Shorter Concat (Reverse Longer)
// function shorter_reverse_longer(a,b){
//     return a.length === b.length || a.length > b.length ?
//         `${b}${a.split('').reverse().join('')}${b}` :
//         `${a}${b.split('').reverse().join('')}${a}`;
// }
// console.log(shorter_reverse_longer('hello', 'bau'));
// console.log(shorter_reverse_longer('first', 'abcde'));




// // Substituting Variables Into Strings: Padded Numbers
// function solution(value){
//     return `Value is ${'0'.repeat(5 - String(value).length) + value}`;
// }
// console.log(solution(1204));




// // Flatten
// var flatten = function (array){
//     return array.flat();
// }
// console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));




// // Parts of a List (REFACTOR BEFORE COMMITING)
// function partlist(arr) {
//     const finalArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1) {
//             finalArr.push();
//             break;
//         } else {
//             let rest = arr.slice(i+1);
//             let bef = arr.slice(0, i+1);
//             finalArr.push([bef.join(' '), rest.join(' ')]);
//         }
//     }
//     return finalArr;
// }
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));




// // Convert an Array of Strings to Array of Numbers
// function toNumberArray(stringarray){
//     return stringarray.map(str => Number(str));
// }
// console.log(toNumberArray(["1.1", "2.2", "3.3"]));




// // Spacify
// function spacify(str) {
//     return str.split('').join(' ');
// }
// console.log(spacify('hello world'));




// // Coding Meetup #6 - Higher-Order Functions Series
// // Can They Code in the Same Language?
// var list1 = [
//     { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];

// function isSameLanguage(list) {
//     let firstVal = list[0].language;
//     return list.every(person => person.language === firstVal);
// }
// console.log(isSameLanguage(list1));




// // Coding Meetup #4 - Higher-Order Functions Series
// // Find the first Python Developer
// var list1 = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];

// function getFirstPython(list) {
//     const pythonDev = list.find(person => person.language === 'Python');
//     return pythonDev ? `${pythonDev.firstName}, ${pythonDev.country}` : `There will be no Python developers`;
// }
// console.log(getFirstPython(list1));




// // Add Property to Every Object in Array
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// function addProperty(arr) {
//     arr.forEach(obj => obj.usersAnswer = null);
//     return arr;
// }

// console.log(addProperty(questions));




// // Find The Duplicated Number in a Consecutive Unsorted List
// function findDup(arr) {
//     arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return arr[i];
//         } else {
//             continue;
//         }
//     }
//     return arr;
// }
// console.log(findDup([1,3,2,5,4,5,7,6]));




// // vowelOne
// function vowelOne(s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return s.toLowerCase().split('').map(letter => !vowels.includes(letter) ? 0 : 1).join('');
// }
// console.log(vowelOne('vowelOne'));




// // Caffeine Script
// function caffeineBuzz(n) {
//     let result = 'mocha_missing!';

//     if (n % 3 === 0) {
//         if (n % 4 === 0) {
//             result = 'Coffee';
//         } else {
//             result = 'Java';
//         }
//     }
//     if (n % 2 === 0) {
//         result += 'Script';
//     }
//     return result;
// }
// console.log(caffeineBuzz(12));




// // Name Array Capping
// function capMe(names) {
//     return names.map(name => name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase());
// }
// console.log(capMe(['jo', 'KARLY', 'jurie']));




// // Smallest Value of an Array
// function min(arr, toReturn) {
//     return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
// }
// console.log(min([1,2,3,4,5], 'value'));
// console.log(min([1,2,3,4,5], 'index'));




// // Last Survivor
// function lastSurvivor(letters, coords) {
//     let str = [...letters];
//     for (let i = 0; i < coords.length; i++) {
//         str.splice(coords[i], 1);
//     }
//     return str.join('');
// }
// console.log(lastSurvivor('kbc', [0,1]));




// // Sum of Odd Cubed Numbers
// function cubeOdd(arr) {
//     const result = arr.filter(num => num % 2 !== 0).map(num => num ** 3).reduce((sum, curr) => sum + curr, 0);
//     return isNaN(result) ? undefined : result;
// }
// console.log(cubeOdd(['a', 12, 9, 'z', 42]));
// console.log(cubeOdd([1,2,3,4]));

// // Coding Meetup #5 - Higher-Order Functions Series
// // Prepare the Count of Languages
// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// function countLanguages(list) {
//     return list.map(person => person.language).reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {});
// }
// console.log(countLanguages(list1));




// // Char Code Calculation (REFACTOR)
// function calc(x) {
//     let total1 = '';
//     let total2 = '';

//     for (let i = 0; i < x.length; i++) {
//         total1 += x.charCodeAt(i);
//     }

//     for (let i = 0; i < total1.length; i++) {
//         total2 += total1[i] === '7' ? '1' : total1[i];
//     }

//     return total1.split('').reduce((sum, curr) => sum + +curr, 0) - total2.split('').reduce((sum, curr) => sum + +curr, 0);
// }
// console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));




// // Drone Fly-By
// function flyBy(lamps, drone) {
//     const num = lamps.length - drone.length;
//     return num > 0 ?
//         'o'.repeat(drone.length) + 'x'.repeat(num) :
//         'o'.repeat(lamps.length);
// }
// console.log(flyBy('xxxxxx', '====T'));




// // Count Consonants (NO REGEX)
// function consonantCount(str) {
//     const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
//     return str.toLowerCase().split('').filter(letter => consonants.includes(letter)).length;
// }
// console.log(consonantCount('abc'));




// // Return a String's Even Characters
// function evenChars(string) {
//     return string.length < 2 || string.length > 100 ?
//         'invalid string' :
//         string.split('').filter((letter, index) => {
//             if ((index + 1) % 2 === 0) return letter;
//         });
// }
// console.log(evenChars("abcdefghijklm"));




// // Divide and Conquer
// function divCon(x) {
//     const num1 = x.filter(num => typeof num === 'number').reduce((sum, curr) => sum + curr, 0);
//     const num2 = x.filter(num => typeof num === 'string').reduce((sum, curr) => sum + +curr, 0);
//     return num1 - num2;
// }
// console.log(divCon([9, 3, '7', '3']));




// // Coding Meetup #2 - Higher-Order Functions Series
// // Greet Developers
// var list1 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];

// function greetDevelopers(list) {
//     for (let person of list) {
//         person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`;
//     }
//     return list;
// }
// console.log(greetDevelopers(list1));




// // Largest Element
// function largest(n, array) {
//     return n === 0 ? [] : array.sort((a, b) => a - b).slice(-n);
// }
// console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));




// // Number of Occurrences
// Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
//     value : function numberOfOccurrences(element) {
//         return this.filter(num => num === element).length;
//     }
// });
// var arr = [0, 1, 2, 2, 3];
// console.log(arr.numberOfOccurrences(2))




// // Sort by Last Char
// function last(x) {
//     return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
// }
// console.log(last('man i need a taxi up to ubud'));




// // Maximum Triplet Sum (Array Series #7)
// function maxTriSum(numbers) {
//     const unique = [...new Set(numbers)];
//     return unique.sort((a,b) => a - b).splice(unique.length - 3).reduce((sum, curr) => sum + curr, 0);
// }
// console.log(maxTriSum([ 3, 2, 6, 8, 2, 3 ]));




// // Coding Meetup #3 - Higher-Order Functions Series
// // Is Ruby Coming?
// var list1 = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];

// function isRubyComing(list) {
//     return list.filter(person => person.language === 'Ruby').length > 0 ? true : false;
// }
// console.log(isRubyComing(list1));




// // Minimize Sum of Array (Array Series #1)
// function minSum(arr) {
//     const sortedMin = arr.sort((a,b) => a - b).splice(0, arr.length / 2);
//     const sortedMax = arr.sort((a,b) => b - a);
//     let result = 0;

//     for (let i = 0; i < sortedMin.length; i++) {
//         result += sortedMax[i] * sortedMin[i];
//     }

//     return result;
// }
// console.log(minSum([12,6,10,26,3,24]));




// // Product of Maximums of Array (Array Series #2)
// function maxProduct(numbers, size) {
//     return numbers.sort((a,b) => b - a).splice(0, size).reduce((sum, curr) => sum * curr, 1);
// }
// console.log(maxProduct([10,2,3,8,1,10,4], 5));




// // The Office 1 - Outed
// function outed(meet, boss) {
//     const scores = Object.entries(meet).map(emp => {
//         return boss === emp[0] ? emp[1] * 2 : emp[1];
//     });
//     return scores.reduce((sum, curr) => sum + curr, 0) / scores.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
// }
// console.log(outed({"tim":0,"jim":5,"randy":3,"sandy":9,"andy":5,"katie":6,"laura":4,"saajid":9,"alex":3,"john":6,"mr":7}, 'tim'));




// // The Office 2 - Boredom Score
// function boredom(staff) {
//     const scores = {
//         accounts: 1,
//         finance: 2,
//         canteen: 10,
//         regulation: 3,
//         trading: 6,
//         change: 6,
//         IS: 8,
//         retail: 5,
//         cleaning: 4,
//         'pissing about': 25,
//     }
//     const collectiveScore = Object.entries(staff).map(person => scores[person[1]]).reduce((sum, curr) => sum + curr, 0);

//     if (collectiveScore <= 80) {
//         return 'kill me now';
//     } else if (collectiveScore < 100 && collectiveScore > 80) {
//         return 'i can handle this';
//     } else {
//         return 'party time!!';
//     }
// }
// console.log(boredom({tim: 'change', jim: 'accounts',
// randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
// laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
// mr: 'finance' }));




// // The Office 3 - Broken Photocopier
// function broken(x) {
//     return x.split('').map(digit => digit === '0' ? '1' : '0').join('');
// }
// console.log(broken('100010'));




// // The Office 4 - Find a Meeting Room
// function meeting(x) {
//     return x.indexOf('O') !== -1 ? x.indexOf('O') : 'None available!';
// }
// console.log(meeting(['X', 'X', 'X']));




// // Help the Fruit Guy
// function removeRotten(bagOfFruits){
//     if (bagOfFruits === null || bagOfFruits === undefined || bagOfFruits.length === 0) return [];

//     return bagOfFruits.map(fruit => {
//         return fruit.includes('rotten') ? fruit.toLowerCase().slice(6) : fruit;
//     })
// }
// console.log(removeRotten(["apple","rottenBanana","apple"]));




// // Count Strings in Objects
// function strCount(obj){
//     let count = 0;
//     for (let key in obj) {
//       if (typeof obj[key] === 'string') count++;
//       if (typeof obj[key] === 'object') count += strCount(obj[key]);
//     }
//     return count;
// }

// function switcher(x) {
//     const alphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', '!', '?', ' '];

//     return x.map(str => alphabet[Number(str) - 1]).join('');
// }
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));




// // By 3, or not by 3? That is the Question...
// function divisibleByThree(str) {
//     return Number.isInteger(Array.from(String(str), Number).reduce((sum, curr) => sum + curr, 0) / 3);
// }
// console.log(divisibleByThree('123'));




// // My Language Skills (REFACTOR)
// function myLanguages(results) {
//     const result = [];
//     Object.entries(results).sort((a, b) => b[1] - a[1]).filter(lang => {
//         if (lang[1] >= 60) result.push(lang[0]);
//     })
//     return result;
// }
// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));
// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));




// // Combine Objects
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }

// function combine() {
//     var obj = {};

//     for (var i = 0; i < arguments.length; i++) {
//         for (var key in arguments[i]) {
//             obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key];
//         }
//     }

//     return obj;

// }
// console.log(combine(objA, objB))




// // Find Your Villian Name
// function getVillainName(birthday){
//     const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
//     const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
//     const fName = m[birthday.getMonth()];
//     const lName = d[birthday.getDate() % 10];

//     return `The ${fName} ${lName}`;
// }
// console.log(getVillainName(new Date("April 21")));




// // Javascript Filter - 1
// function searchNames(logins) {
//     return logins.filter(login => login[0].slice(-1) === '_');
// }
// console.log(searchNames([['foo', 'foo@foo.com'], ['bar_', 'bar@bar.com']]));




// // Absent Vowel
// function absentVowel(x) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < vowels.length; i++) {
//         if (!x.includes(vowels[i])) {
//             return i;
//         }
//     }
// }

// console.log(absentVowel('John Doe hs seven red pples under his bsket'));
// console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));




// // Longest Vowel Chain (No Regex)
// function solve(s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const chain = [];
//     let count = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (!vowels.includes(s[i])) {
//             chain.push(count);
//             count = 0;
//         } else {
//             count++;
//         }
//     }
//     return Math.max(...chain);
// }
// console.log(solve('ultrarevolutionariees'));




// // Remove Consecuritve Duplicate Words
// function removeConsecutiveDuplicates(string) {
//     const stringArr = string.split(' ');
//     const newArr = [];
//     for (let i = 0; i < stringArr.length; i++) {
//         if (stringArr[i] !== stringArr[i + 1]) {
//             newArr.push(stringArr[i]);
//         }
//     }
//     return newArr.join(' ');
// }
// console.log(removeConsecutiveDuplicates("alpha alpha alpha alpha"));




// // Get Key/Value Pairs as Arrays
// function keysAndValues(data) {
//     return [Object.keys(data), Object.values(data)];
// }
// console.log(keysAndValues({a: 1, b: 2, c: 3}));




// // Moves in Squared Strings (I)
// function vertMirror(strng) {
//     return strng.split('\n').map(w => w.split('').reverse().join('')).join('\n');
// }
// function horMirror(strng) {
//     return strng.split('\n').reverse().join('\n');
// }
// function oper(fct, s) {
//     return fct(s);
// }

// console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
// console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"));




// // The Old Switcheroo
// function vowel2index(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').map((l,i) => vowels.includes(l.toLowerCase()) ? i + 1 : l).join('');
// }
// console.log(vowel2index('90\'s cornhole Austin, pickled butcher yr messenger bag gastropub next level leggings listicle meditation try-hard Vice. Taxidermy gastropub gentrify, meh fap organic ennui fingerstache pickled vegan. Seitan sustainable PBR&B cornhole VHS. Jean shorts actually bitters ugh blog Intelligentsia. Artisan Kickstarter DIY, fixie cliche salvia lo-fi four loko. PBR&B Odd Future ugh fingerstache cray Wes Anderson chia typewriter iPhone bespoke four loko, Intelligentsia photo booth direct trade. Aesthetic Tumblr Portland XOXO squid, synth viral listicle skateboard four dollar toast cornhole Blue Bottle semiotics.'));




// // Lost Number in Number Sequence
// function findDeletedNumber(arr, mixArr) {
//     const missing = arr.filter(num => !mixArr.includes(num));
//     return missing.length === 0 ? 0 : Number(missing);
// }
// console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));




// // Return the Missing Element
// function getMissingElement(superImportantArray){
//     const sorted = superImportantArray.sort();
//     let missingNum = 0;

//     for (let i = 0; i < sorted.length; i++) {
//         if (i < sorted[i]) {
//             missingNum = i;
//             break;
//         }
//     }

//     return missingNum;
// }
// console.log(getMissingElement([0,5,1,3,2,9,7,6,4]));
// console.log(getMissingElement([9,2,4,5,7,0,8,6,1]));




// // Naughty or Nice?
// function getNiceNames(people){
//     return people.filter(p => {
//         if (p.wasNice === true) return p.name;
//     }).map(p => p.name);
// }

// function getNaughtyNames(people){
//     return people.filter(p => {
//         if (p.wasNice === false) return p.name;
//     }).map(p => p.name);
// }

// console.log(getNiceNames( [
//     { name: 'Warrior reading this kata', wasNice: true },
//     { name: 'xDranik', wasNice: false },
// ] ));
// // => returns [ 'Warrior reading this kata', 'Santa' ]

// console.log(getNaughtyNames( [
//     { name: 'Warrior reading this kata', wasNice: true },
//     { name: 'xDranik', wasNice: false },
// ] ));
// // => returns [ 'xDranik' ]




// // The reject() Function
// function reject(array, predicate) {
//     return array.filter(num => !predicate(num));
// }
// console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 == 0));




// // Interview Questions (easy)
// function getStrings(city) {
//     const result = [];
//     const instances = city.replace(/\s/g, '').toLowerCase().split('').reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {}).forEach(prop => {
//         console.log(prop);
//     });

//     for (let prop in instances) {
//         result.push(`${prop}:${'*'.repeat(instances[prop])}`);
//     }

//     return result.join(',');
// }
// console.log(getStrings('Chicago'));
// console.log(getStrings("Las Vegas"));




// // Insert Dashes
// function insertDash(num) {
//     const numStr = String(num);
//     const result = [];

//     for (let i = 0; i < numStr.length; i++) {
//         if (i === (numStr.length - 1)) {
//             result.push(numStr[i]);
//             break;
//         } else if (numStr[i] % 2 !== 0 && (numStr[i + 1] % 2 !== 0)) {
//             result.push(numStr[i] + '-');
//         } else {
//             result.push(numStr[i]);
//         }
//     }

//     return result.join('');
// }
// console.log(insertDash(117191));
// console.log(insertDash(123456));




// // Fix My Phone Numbers! (NO REGEX)
// function isItANum(str) {
//     const filteredStr = str.split('').filter(d => Number(d) >= 0 && d !== ' ');
//     console.log(filteredStr);
//     return Number(filteredStr[0]) !== 0 || filteredStr.length !== 11 ? 'Not a phone number' : filteredStr.join('');
// }
// console.log(isItANum("0x £ C q l t £ ^ & M D408314708"));
// console.log(isItANum("sjfniebienvr12312312312ehfWh"));
// console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));
// console.log(isItANum("stop calling me no I have never been in an accident"));




// // Are They Square?
// var isSquare = function(arr) {
//     if (arr.length === 0) return undefined;
//     return arr.map(n => Math.sqrt(n) % 1 === 0).includes(false) ? false : true;
// }
// console.log(isSquare([1,4,9,16]));
// console.log(isSquare([3,4,7,9]));
// console.log(isSquare([]));




// // String Merge
// function stringMerge(string1, string2, letter){
//     return string1.slice(0, string1.indexOf(letter) + 1) + string2.slice(string2.indexOf(letter) + 1);
// }
// console.log(stringMerge('coding', 'anywhwere', 'n'));




// // Partial Word Searching
// function wordSearch(query, seq) {
//     const filtered = seq.filter(s => s.toLowerCase().includes(query.toLowerCase()));
//     return filtered.length > 0 ? filtered : ["Empty"];
// }
// console.log(wordSearch("ab", ["za", "ab", "abc", "zAB", "zbc"]));
// console.log(wordSearch("zzz", ["za", "ab", "abc", "zAB", "zbc"]));




// // Whos Online? (REFACTOR)
// const list = [
//   {
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//   }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }
// ];

// const whosOnline = (friends) => {
//     const online = [];
//     const offline = [];
//     const away = [];

//     return friends.reduce((obj, curr) => {
//         if (curr.status === 'online' && curr.lastActivity <= 10) {
//             online.push(curr.username)
//             obj['online'] = online;
//         } else if (curr.status === 'offline') {
//             offline.push(curr.username);
//             obj['offline'] = offline;
//         } else {
//             away.push(curr.username);
//             obj['away'] = away;
//         }
//         return obj;
//     }, {})
// }

// console.log(whosOnline(list));




// // 99 Bottles of Beer
// var sing = function(num) {
//   var lyrics = [];

//   for (let i = 99; i >= 3; i--) {
//     lyrics.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
//     lyrics.push('Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
//   }

//   return lyrics.concat([
//     '2 bottles of beer on the wall, 2 bottles of beer.',
//     'Take one down and pass it around, 1 bottle of beer on the wall.',
//     '1 bottle of beer on the wall, 1 bottle of beer.',
//     'Take one down and pass it around, no more bottles of beer on the wall.',
//     'No more bottles of beer on the wall, no more bottles of beer.',
//     'Go to the store and buy some more, 99 bottles of beer on the wall.'
//   ]);
// }
// console.log(sing(99))




// // Alphabet Symmetry
// function solve(arr) {
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   let count = 0;
//   const finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (alphabet.indexOf(arr[i][j].toLowerCase()) === j) count++;
//     }
//     finalArr.push(count);
//     count = 0;
//   }

//   return finalArr;
// }
// console.log(solve(["abode", "ABc", "xyzD"]));




// // Complete The Pattern #1
// function pattern(n) {
//   let output = [];
//   for (let i = 1; i <= n; i++) {
//     output.push(String(i).repeat(i));
//   }
//   return output.join('\n');
// }

// console.log(pattern(5));




// // Simple Consecutive Pairs
// function pairs(arr){
//   let count = 0;
//   for (let i = 1; i <= arr.length; i += 2) {
//     if (arr[i - 1] + 1 === arr[i] || arr[i - 1] - 1 === arr[i]) count++;
//   }
//   return count;
// };
// console.log(pairs([1,2,5,8,-4,-3,7,6,5]));




// // Minimum Steps (Array Series #6)
// function minimumSteps(numbers, value){
//   const arrSort = numbers.sort( (x, y) => x - y);
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < arrSort.length; i++){
//       if (sum >= value) break;
//       sum+= arrSort[i];
//       count++;
//   }
//   return count - 1;
// }
// console.log(minimumSteps([4,6,3], 7));
// console.log(minimumSteps([8,9,10,4,2], 23));




// // Spoonerize Me
// function spoonerize(words) {
//     const arr = words.split(' ');
//     return arr.map((w, i) => {
//         if (i === 0) {
//             return arr[arr.length - 1][0] + w.slice(1);
//         } else if (i === (arr.length - 1)) {
//             return arr[0][0] + w.slice(1);
//         } else {
//             return w;
//         }
//     }).join(' ');
// }
// console.log(spoonerize('wedding of bells'));




// // Coding Meetup #12 - Higher Order Functions Series
// // Find GitHub Admins
// var list1 = [
//     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ];

// function findAdmin(list, lang) {
//     return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes');
// }
// console.log(findAdmin(list1, 'JavaScript'));

// // We Have Liftoff
// function liftoff(instructions) {
//     return instructions.sort((a,b) => b - a).join(' ') + ' liftoff!';
// }
// console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]));




// // sillyCASE
// function sillycase(silly) {
//     let mid = Math.ceil(silly.length / 2);
//     return silly.slice(0, mid).toLowerCase() + silly.slice(mid).toUpperCase();
// }
// console.log(sillycase('brian'));
// console.log(sillycase('foobar'));
// console.log(sillycase('javascript'))

// // Evens Times Last
// function evenLast(numbers) {
//     return numbers.length !== 0 ?
//             numbers
//                 .filter((n, i) => i % 2 === 0)
//                 .reduce((sum, curr) => sum + curr, 0) * numbers[numbers.length - 1]
//             :
//             0
// }
// console.log(evenLast([2, 3, 4, 5]));




// // Coding Meetup #11 - Higher-Order Functions Series
// // Find the Average Age
// var list1 = [
//     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// function getAverageAge(list) {
//     return Math.round(list1.reduce((sum, curr) => sum + curr.age, 0) / list.length);
// }
// console.log(getAverageAge(list1));




// // Sort Numbers
// function solution(nums) {
//     if (nums === null || nums.length === 0) return []
//     return nums.sort((a,b) => a - b);
// }
// console.log(solution([1,2,3,10,5]));
// console.log(solution(null));




// // Coding Meetup #14 - Higher Order Functions Series
// // Order the Food
// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
//       meal: 'vegetarian' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
//       meal: 'standard' },
//     { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
//       meal: 'vegan' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
//       meal: 'vegetarian' },
// ];
// function orderFood(list) {
//     return list.reduce((obj, curr) => {
//         obj[curr.meal] = obj[curr.meal] + 1 || 1;
//         return obj;
//     }, {})
// }
// console.log(orderFood(list1));




// // Last Digits of a Number
// function lastDigit(n, d) {
//   return d <= 0 ? [] : [...n.toString()].map(n => Number(n)).slice(-d);
// }
// console.log(lastDigit(123767, 4));
// console.log(lastDigit(1234, 0));
// console.log(lastDigit(1345,5));




// // Lucky Number
// function isLucky(n) {
//   return n % 9 === 0 ? true : false;
// }
// console.log(isLucky(1892376));




// // Hells Kitchen
// function gordon(a) {
//   const vowels = ['e', 'i', 'o', 'u'];
//   return a
//         .toLowerCase()
//         .split(' ')
//         .map(word => word + '!!!!')
//         .map(word => word.split('').map(letter => {
//           if (letter === 'a') {
//             return '@';
//           } else if (vowels.includes(letter)) {
//             return '*';
//           } else {
//             return letter;
//           }
//         }).join('')).join(' ').toUpperCase();
// }
// console.log(gordon('What feck damn cake'));




// // Double Sort
// function dbSort(a) {
//   const nums = a.filter(n => typeof n === 'number').sort((a,b) => a - b);
//   const str = a.filter(s => typeof s === 'string').sort();
//   return [...nums, ...str];
// }
// console.log(dbSort(['C', 'W', 'W', 'W', 1, 2, 0]));
// console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]));




// // Printer Error
// function printerError(s) {
//   const range = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
//   return `${[...s].filter(c => !range.includes(c)).length}/${s.length}`;
// }
// console.log(printerError("aaabbbbhaijjjm"));
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));




// // Summing a Number's Digits
// function sumDigits(number) {
//   return String(number).split('').filter(Number).reduce((sum, curr) => sum + Number(curr), 0);
// }
// console.log(sumDigits(-32));




// // Beginner Series #3 Sum of Numbers
// function GetSum(a, b) {
//   return (Math.abs(a - b) * (a + b) / 2);
// }




// // Incrementer
// function incrementer(nums) {
//   if (nums.length === 0) return [];
//   return nums.map((a,i) => (a + i + 1) % 10);
// }
// console.log(incrementer([3, 6, 9, 8, 9]));
// console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]));
// console.log(incrementer([3, 6, 9, 8, 9]));
// console.log(incrementer([4, 6, 7, 1, 3]));




// // Initialize My Name
// function initializeNames(name) {
//     return name.split(' ').map((n, i) => {
//         return i === 0 || (i === name.split(' ').length - 1) ? n : `${n[0].toUpperCase()}.`;
//     }).join(' ');
// }
// console.log(initializeNames('Lois Mary Lane'));
// console.log(initializeNames('Alice Betty Catherine Davis'));




// // Last
// function last(list) {
//     let last = arguments[arguments.length - 1];
//     return last[last.length - 1] || last;
// }
// console.log(last([1,2,3,4,5]));
// console.log(last("abcde"));
// console.log(last(1,"b",3,"d",5));




// // Max-Min Arrays
// function solve(arr) {
//     const arrDuplicate = [...arr];
//     return arr.map((n,i) => {
//         if (i % 2 !== 0) {
//             return arrDuplicate.splice(arrDuplicate.indexOf(Math.min(...arrDuplicate)), 1);
//         } else {
//             return arrDuplicate.splice(arrDuplicate.indexOf(Math.max(...arrDuplicate)), 1);
//         }
//     }).map(a => a.pop());
// }
// console.log(solve([15,11,10,7,12]));




// // Two Fighters, One Winner
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let players = fighter1.name == firstAttacker ? [fighter1, fighter2] : [fighter2, fighter1];

//     while (true) {
//         let currentTurnPlayer = players[0];
//         let nextTurnPlayer = players[1];

//         nextTurnPlayer.health -= currentTurnPlayer.damagePerAttack;

//         const haveWinner = nextTurnPlayer.health <= 0;

//         console.log(`${currentTurnPlayer} attacks ${nextTurnPlayer}; ${nextTurnPlayer} now has ${nextTurnPlayer.health} health ${haveWinner ? `and is dead. ${currentTurnPlayer} wins` : ""}`);

//         if (haveWinner) {
//             return currentTurnPlayer.name;
//         } else {
//             [players[0], players[1]] = [players[1], players[0]];
//         }
//     }
// }

// console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));




// // Simple Fun #176 - Reverse Letter
// function reverseLetter(str) {
//     return [...str].filter(l => l.match(/[a-z]/i)).reverse().join('');
// }
// console.log(reverseLetter('ultr53o?n'))




// // Function 2 - Squaring an Argument
// function square(n) {
//     return n ** 2;
// }
// console.log(square(3));




// // Numbers in Strings
// function solve(s) {
//     let num = s.match(/\d+/g);
//     return Math.max(...num);
// }
// console.log(solve('gh12cdy695m1'));




// // Simple Remove Duplicates
// function solve(arr) {
//     return Array.from(new Set(arr.reverse())).reverse();
// }
// console.log(solve([3,4,4,3,6,3]))




// // Inspiring Strings
// function longestWord(stringOfWords) {
//     return String(stringOfWords.split(' ').sort((a,b) => a.length - b.length).slice(-1));
// }
// console.log(longestWord('one two three'));




// // Covfefe
// function covfefe(str) {
//     return str.includes('coverage') ? str.replaceAll('coverage', 'covfefe') : `${str} covfefe`;
// }
// console.log(covfefe('coverage coverage'));
// console.log(covfefe('nothing'));




// // All Inclusive?
// function containAllRots(str, arr) {
//     for (var i = 0; i < str.length; i++) {
//       if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
//         return false
//       }
//     }
//     return true
// }




// // Character Counter
// function validateWord(s) {
//     const values = Object.values(s.toLowerCase().split('').reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).sort((a,b) => b - a);
//     return values.every(v => v === values[0]);
// }
// console.log(validateWord('abcabc'));
// console.log(validateWord('abc123a3'));




// // Password Maker (No Regex)
// function makePassword(phrase) {
//     return phrase.split(' ').map(w => {
//         if (w[0].toLowerCase() === 'i') {
//             return '1';
//         } else if (w[0].toLowerCase() === 'o') {
//             return '0';
//         } else if (w[0].toLowerCase() === 's') {
//             return '5';
//         } else {
//             return w[0];
//         }
//     }).join('')
// }
// console.log(makePassword("Give me liberty or give me death"));




// // Move 10 (No Regex)
// function moveTen(s) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//     return s.toLowerCase().split('').map(l => {
//         let i = alphabet.indexOf(l) + 10;
//         console.log(i)
//         if (i > (alphabet.length - 1)) {
//             i = i - alphabet.length;
//         }
//         return alphabet[i];
//     }).join('')
// }
// console.log(moveTen('saiowvkrdqqcknzafs'));




// // Substring Fun
// function nthChar(words) {
//     return words.map((w, i) => w.substr(i, 1)).join('');
// }
// console.log(nthChar(['yoda', 'best', 'has']));




// // sPoNgEbOb MeMe
// function spongeMeme(sentence) {
//   return sentence
//     .toLowerCase()
//     .split("")
//     .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
//     .join("");
// }
// console.log(spongeMeme("stop Making spongebob Memes!"));




// // Hello World - Without Strings
// const helloWorld = () => {
//     return new String("Hello, World!");
// }
// console.log(helloWorld());




// // NATO Phonetic Alphabet
// var nato = (function() {
//     var letters =  {
//       "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
//       "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
//       "G": "Golf",   "H": "Hotel",   "I": "India",
//       "J": "Juliett","K": "Kilo",    "L": "Lima",
//       "M": "Mike",   "N": "November","O": "Oscar",
//       "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
//       "S": "Sierra", "T": "Tango",   "U": "Uniform",
//       "V": "Victor", "W": "Whiskey", "X": "X-ray",
//       "Y": "Yankee", "Z": "Zulu"
//     }
    
//     return function(word) {
//       return word.toUpperCase().split('').map( function(l){ return letters[l] }).join(" ")
//     }
//   })()
//   console.log(nato('hello'))




// // esreveR gnirtS
// String.prototype.reverse = function () {
//   return this.split('').reverse().join('');
// }

// console.log('hello'.reverse());




// // Tea for Two
// function tea42(input) {
//   return String(input).split('').map(l => l === '2' ? 't' : l).join('');
// }
// console.log(tea42(102));




// // Failed Filter - Bux Fixing #3
// const FilterNumbers = function(str) {
//     return str.split('').filter(c => isNaN(c)).join('');
// }
// console.log(FilterNumbers('test0123'))




// // Numbers to Objects
// function numObj(s){
//     return s.map(num => {
//         return {[num]: String.fromCharCode(num)}
//     })
// }
// console.log(numObj([118, 117, 120]));




// // Dropcaps
// function dropCap(n) {
//     return n
//             .split(' ')
//             .map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word)
//             .join(' ')
// }
// console.log(dropCap('   space WALK   '));
// console.log(dropCap('apple'));
// console.log(dropCap('apple of banana'));




// // Help Bob Count Letters and Digits
// function countLettersAndDigits(input) {
//     let count = 0;
//     input = input.toLowerCase();
//     for (let i = 0; i < input.toLowerCase().length; i++) {
//         if ((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) || (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57)) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(countLettersAndDigits('hel2!lo'));
// console.log(countLettersAndDigits('12345f%%%t5t&/6'))




// // How Many Unique Consonants (NEEDS)
// function countConsonants(str) {
//     const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
//     const result = [];
//     str
//         .toLowerCase()
//         .split('')
//         .filter(l => consonants.includes(l))
//         .map(l => {
//             if (!result.includes(l)) result.push(l);
//         })
//     return result.length;
// }
// console.log(countConsonants('sillystring'))
// console.log(countConsonants('FN7KO'))




// // Mispelled Word
// function getCount(words) {
//     if (typeof str != 'string') str = '';
//     return {
//         vowels: str.replace(/[^aeiou]/gi, '').length,
//         consonants: str.replace(/[eiuo]|[^b-z]/gi, '').length
//     }
// }
// console.log(getCount('Here is some text'));




// // Is it a vowel on this position?
// function checkVowel(string, position) {
//     const vowels = ['a','e','i','o','u'];
//     return vowels.includes(string.toLowerCase()[position]);
// }
// console.log(checkVowel('cat', 1));
// console.log(checkVowel('cat', 0));
// console.log(checkVowel('cat', 4));
// console.log(checkVowel('Amanda', -2));




// // Ghostbusters (whitespace removal) (no regex)
// function ghostBusters(building) {
//     return building.includes(' ') ? building.split(' ').join('') : `You just wanted my autograph didn't you?`;
// }
// console.log(ghostBusters('Factor y s t s'));




// // String Chunks
// function stringChunk(str, n) {
//     if (isNaN(n) || n <= 0) return [];
//     else if (n > str.length) return [str];

//     const result = [];
//     for (let i = 0; i < str.length; i += n) {
//         result.push(str.slice(i, i + n))
//     }
//     return result;
// }




// // Email Address Obfuscator (No Regex)
// function obfuscate(email) {
//     return email.split('').map(c => {
//         if (c === '@') return ' [at] ';
//         else if(c === '.') return ' [dot] ';
//         else return c;
//     }).join('');
// }
// console.log(obfuscate('test@123.com'));




// // Keypad Horror
// function computerToPhone(numbers){
//     const keys = {
//         7: "1",
//         8: "2",
//         9: "3",
//         1: "7",
//         2: "8",
//         3: "9"
//     }
//     return numbers.split('').map(n => keys[n] ? keys[n] : n).join('');
// }
// console.log(computerToPhone("0789456123"));




// // String to Integer Conversion
// function myParseInt(str) {
//     return /^d+$/g.test(str.trim()) ? +str : NaN;
// }
// console.log(myParseInt('1'));
// console.log(myParseInt('08540654065'));




// // Number of Digit Tiers
// function createArrayOfTiers(num) {
//     return num.toString().split('').map((n, i) => {
//         return num.toString().slice(0, (i + 1));
//     });
// }
// console.log(createArrayOfTiers(420));




// // Categorize New Member
// function openOrSenior(data) {
//     return data.map(m => m[0] >= 55 && m[1] > 7 ? 'Senior' : 'Open');
// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));




// // Filter Unused Digits
// function unusedDigits(...arr) {
//     const digits = arr.join();
//     return [0,1,2,3,4,5,6,7,8,9]
//                 .filter(n => !digits.includes(n))
//                 .join('');
// }
// console.log(unusedDigits(12, 34, 56, 78));




// // For the Sake of Argument
// function numbers(...args) {
//     return args.every(n => Number(n));
// }
// console.log(numbers(1,2,3,4,5));




// // Find Duplicates
// function duplicates(arr) {
//     return [...new Set(arr.filter((e, i) => arr.indexOf(e) < i))];
// }

// console.log(duplicates([1,2,4,4,3,3,1,5,3,"5"]));




// // Scoring Tests 
// function checkThreeAndTwo(array) {
//     const reduced = Object.values(array.reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {}))
//     return reduced.length === 2 && reduced[0] <= 3 && reduced[1] <= 3;
// }

// console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'a']));




// // Find an Employee Role in the Company
// let employees = [ 
//     {firstName: "Dipper", lastName: "Pines", role: "Boss"},
//     {firstName: "John", lastName: "Doe", role: "Loader"},
//     {firstName: "Jane", lastName: "Doe", role: "Designer"} 
// ];

// function findEmployeesRole(name) {
//     const filtered = employees.filter(e => name === `${e.firstName} ${e.lastName}`);
//     return filtered.length ? filtered[0].role : 'Does not work here!';
// } 
// console.log(findEmployeesRole('Dipper Pines'));




// // Convert Hash to An Array 
// function convertHashToArray(hash) {
//     return Object.entries(hash).sort();
// }

// console.log(convertHashToArray({name: "Jeremy", age: 24}));




// // Multiply Word in String
// function modifyMultiply(str, loc, num) {
//     const word = str.split(' ').splice(loc, 1);
//     return word.concat(... new Array(num - 1).fill(word)).join('-');
// }
// console.log(modifyMultiply('This is a string', 3, 5));




// // Find All Non-Consecutive Numbers
// function allNonConsecutive(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i + 1]) - arr[i] > 1) result.push({ 'i': arr.indexOf(arr[i + 1]), 'n': arr[i + 1] });
//     }
//     return result;
// }
// console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));




// // Filter Coffee 
// function search(budget, prices) {
//     return prices
//             .filter(p => p <= budget)
//             .sort((a,b) => a - b)
//             .join(',');
// }
// console.log(search(3, [6, 1, 2, 9, 2]));
// console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));




// // Product of Largest Pair 
// function maxProduct(a) {
//     let f = Math.max(...a);
//     a.splice(a.indexOf(f), 1);
//     return f  * Math.max(...a);
// }
// console.log(maxProduct([2, 1, 5, 0, 4, 3]));




// // Identical Elements
// function duplicateElements(m, n) {
//     return m.some(num => n.includes(num));
// }
// console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
// console.log(duplicateElements([9, 8, 7], [8, 1, 3]));




// Batman Quotes 
function getQuote(quotes, hero) {
    const extractedNum = hero.replace(/\D/g, '');
    if (hero[0] === 'B') return `Batman: ${quotes[+extractedNum]}`;
    else if (hero[0] === 'R') return `Robin: ${quotes[+extractedNum]}`;
    else return `Joker: ${quotes[+extractedNum]}`;
}
console.log(getQuote(["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], 'Rob1in'));







/* =====================================

                6 Kyu

======================================== */

// // Who Likes It?
// function likes(names) {
//     if (names.length === 0) {
//         return `no one likes this`;
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} likes this`;
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// }




// // Create Phone Number (REFACTOR)
// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));




// // Array.diff
// function arrayDiff(a, b) {
//     return a.filter(num => !b.includes(num));
// }
// console.log(arrayDiff([1,2,3], [1,2]));




// // Duplicate Encoder
// function duplicateEncode(word){
//     return word.toLowerCase().split('').map(letter => word.indexOf(letter) === word.lastIndexOf(letter) ? '(' : ')').join('')
// }




// // Take a Ten Minute Walk
// function isValidWalk(walk) {
//     let startingVert = 0;
//     let startingHori = 0;
//     for (let i = 0; i < walk.length; i++) {
//         if (walk[i] === 'n') startingVert += 1;
//         else if (walk[i] === 's') startingVert -= 1;
//         else if (walk[i] === 'w') startingHori += 1;
//         else if (walk[i] === 'e') startingHori -= 1;
//     }
//     return walk.length === 10 && startingVert === 0 && startingHori === 0;
// }
// console.log(isValidWalk(['n', 's']))




// // Find the Unique Number (REFACTOR - MAKE IT FASTER?)
// function findUniq(arr) {
//     return +arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
// }
// console.log(findUniq([ 1,0,0 ]));




// // Sort the Odd
// function sortArray(array) {
//     let oddNums = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
//     let finalArr = [];
//     let i = 0;

//     array.forEach(num => {
//         if (num % 2 === 0) {
//             finalArr.push(num);
//         } else {
//             finalArr.push(oddNums[i]);
//             i++;
//         }
//     })
//     return finalArr;
// }
// console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));




// // Which Are In?
// function inArray(array1,array2){
//     return array1.filter(word => {
//         if (array2.join(' ').includes(word)) {
//             return word;
//         }
//     }).sort();
// }
// console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]));




// // Mexican Wave
// function wave(str){
//     let waveArr = [];

//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (letter === ' ') {
//             continue;
//         } else {
//             waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
//         }
//     }
//     return waveArr;
// }
// console.log(wave('hello'))




// // Counting Duplicates (REFACTOR FOR NEXT DAY)
// function duplicateCount(text){
//     return Object.entries(text.toLowerCase().split('').reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).filter(([key, value]) => value > 1).length;
// }
// console.log(duplicateCount('aabbcde'));




// // Data Reverse
// function dataReverse(data) {
//     const newArr = [];
//     const copy = [...data];
//     for (let i = 0; i < copy.length / 8; i++) {
//         newArr.push(data.splice(0, 8));
//     }

//     return newArr.reverse().flat();
// }
// console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));




// // Array Helpers
// Array.prototype.square = function() {
//     return this.map(num => num ** 2);
// }

// Array.prototype.cube = function() {
//     return this.map(num => num ** 3);
// }

// Array.prototype.average = function() {
//     return this.reduce((sum, curr) => sum + curr, 0) / this.length;
// }

// Array.prototype.sum = function() {
//     return this.reduce((sum, curr) => sum + curr, 0);
// }

// Array.prototype.even = function() {
//     return this.filter(num => num % 2 === 0);
// }

// Array.prototype.odd = function() {
//     return this.filter(num => num % 2 !== 0);
// }




// // Highest Rank Number in an Array
// function highestRank(arr) {
//     const reducedAndSorted = Object.entries(arr.reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).sort(([,a], [,b]) => a - b);
//     return +reducedAndSorted[reducedAndSorted.length - 1][0];
// }
// console.log(highestRank([12,10,8,12,7,6,4,10,12,10]));




// // The Vowel Code
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function encode(string) {
//     return string.split('').map(letter => vowels.includes(letter) ? vowels.indexOf(letter) + 1 : letter).join('');
// }

// function decode(string) {
//     return string.split('').map(letter => isNaN(letter) ? letter : vowels[+letter - 1]).join('');
// }

// console.log(encode('hello'));
// console.log(decode('h2ll4'));




// // CamelCase Method
// String.prototype.camelCase=function(){
//     if (this.length === 0) return '';
//     return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
// }

// console.log(''.camelCase());




// // Pair of Glovez
// function numberOfPairs(gloves) {
//     return Object.values(gloves.reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {})).map(val => val % 2 !== 0 ? val - (val % 2) : val).reduce((sum, curr) => sum + curr, 0) / 2;
// }
// console.log(numberOfPairs([
//     'Silver',  'Blue',    'Green',   'Olive',   'Maroon',  'Silver',
//     'Lime',    'Gray',    'White',   'White',   'Lime',    'Silver',
//     'White',   'Purple',  'Fuchsia', 'Fuchsia', 'Navy',    'Green',
//     'Yellow',  'Aqua',    'Teal',    'Navy',    'White',   'Blue',
//     'Purple',  'Yellow',  'White',   'Navy',    'Blue',    'Fuchsia',
//     'Gray',    'Black',   'Lime',    'Green',   'Gray',    'Gray',
//     'Maroon',  'Gray',    'Navy',    'Navy',    'Maroon',  'Aqua',
//     'Black',   'Yellow',  'Silver',  'Green',   'Silver',  'Purple',
//     'Fuchsia', 'Teal',    'Teal',    'Yellow',  'Fuchsia', 'Aqua',
//     'Silver',  'Aqua',    'Green',   'Olive',   'Silver',  'Red',
//     'Olive',   'Fuchsia', 'Maroon',  'Gray',    'Gray',    'Lime',
//     'Aqua',    'Maroon',  'Yellow',  'Red',     'Silver',  'Fuchsia',
//     'Gray',    'White',   'Fuchsia', 'Black',   'Green',   'Fuchsia',
//     'Teal',    'Green',   'Fuchsia', 'Yellow',  'White',   'Yellow',
//     'Lime',    'Aqua',    'Red',     'Green',   'Purple',  'White',
//     'Yellow',  'Black',   'White',   'Lime',    'Lime'
//   ]));




// // Prefill an Array
// function prefill(n, v) {
//     if (parseInt(n) !== Math.abs(n)) {
//         throw new TypeError(`${n} is invalid`);
//     }

//     return Number(n) ? Array(n).fill(v) : [];
// }

// console.log(prefill(3,1));
// console.log(prefill(2, 'abc'));
// console.log(prefill(3, prefill(2, '2d')));
// // console.log(prefill('xyz', 1));
// console.log(prefill(Infinity, 1));




// // Run-Length Encoding
// let runLengthEncoding = function(str) {
//     if (str.length === 0) return [];

//     let finalArr = [];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             count++;
//             finalArr.push([count, str[i]]);
//             count = 0;
//         }
//     }
//     return finalArr;
// }
// console.log(runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));




// // Replace With Alphabet Position
// function alphabetPosition(text) {
//     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//     return text
//         .toLowerCase()
//         .split('')
//         .filter(letter => alphabet.includes(letter))
//         .map(letter => alphabet.indexOf(letter) + 1).join(' ');
// }
// console.log(alphabetPosition('The sunset sets at twelve o\' clock'));




// // Is Integer Array?
// function isIntArray(arr) {
//     if (!Array.isArray(arr)) return false;

//     for (let i = 0; i < arr.length; i++) {
//         if (Math.floor(arr[i]) !== arr[i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(isIntArray([]));
// console.log(isIntArray([1, 2, 3, 4]));
// console.log(isIntArray([null]));




// // Give me a Diamond!
// function diamond(n){
//     if (n <= 0 || n % 2 === 0) return null;
//     let str = '';

//     for (let i = 0; i < n; i++) {
//         let len = Math.abs((n - 2 * i - 1) / 2);
//         str += ' '.repeat(len);
//         str += '*'.repeat(n - 2 * len);
//         str += '\n';
//     }
//     return str;
// }
// console.log(diamond(3));




// // Lottery Ticket
// function bingo(ticket, win) {
//     let wins = 0;
//     ticket.map((chance) => {
//         if (chance[0].includes(String.fromCharCode(chance[1]))) wins++;
//     });
//     return wins < win ? 'Loser!' : 'Winner!';
// }
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));




// // Javascript Filter - 3
// function searchNames(logins) {
//     return logins
//         .filter((login) => login.startsWith('.') || login.endsWith('.'))
//         .map(login => logins[logins.indexOf(login) + 1]);
// }
// console.log(searchNames(['foo', 'foo@foo.com', 'bar.', 'bar@bar.com', '.test', 'test@test.com']));




// // Count Characters in Your String
// function count(string) {
//     return string.split('').reduce((obj, curr) => {
//         obj[curr] = obj[curr] + 1 || 1;
//         return obj;
//     }, {});
// }
// console.log(count('aba'));




// // Convert String to Camel Case (NO REGEX) (REFACTOR)
// function toCamelCase(str) {
//     return str
//             .split('')
//             .map(d => d === '-' || d === '_' ? ' ' : d)
//             .join('')
//             .split(' ')
//             .map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1))
//             .join('');
// }
// console.log(toCamelCase('the-stealth_warrior'));




// // Split Strings
// function solution(str) {
//     str = str.length % 2 !== 0 ? `${str}_` : str;
//     const result = [];

//     for (let i = 0; i < str.length; i += 2) {
//         result.push([...str].splice(i, 2));
//     }

//     return result.map(arr => arr.join(''));
// }
// console.log(solution('abcdef'));
// console.log(solution('abcdefg'));

// // Detect Panagram
// function isPangram(string) {
//     const pangram = new Set(
//         string
//             .replace(/[^\w\s\']|_/g, '')
//             .replace(/[0-9]/g, '')
//             .replace(/\s+/g, '')
//             .toLowerCase()
//             .split('')
//             .sort()
//     )
//     return pangram.size === 26 ? true : false;
// }
// console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));




// // Your Order, Please
// function order(words) {
//     return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
// }
// console.log(order("is2 Thi1s T4est 3a"));




// // Break camelCase
// function solution(string) {
//     return string.match(/([A-Z]?[^A-Z]*)/g).join(' ').trim();
// }
// console.log(solution('camelCasingTest'));




// // Dashatize It
// function dashatize(num) {
//     return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
// }
// console.log(dashatize(274));
// console.log(dashatize(6815));




// // Coding Meetup $7 - Higher Order Functions Series
// // Find the Most Senior Developer
// var list1 = [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];

// function findSenior(list) {
//     return list.sort((a, b) => b.age - a.age).filter(p => p.age === list[0].age);
// }

// console.log(findSenior(list1));




// // WeIrD StRiNg CaSe
// function toWeirdCase(string) {
//     return string.split(' ').map(w => w.split('').map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join('')).join(' ');
// }
// console.log(toWeirdCase('String'));
// console.log(toWeirdCase( "Weird string case" ));




// // Arrh, Grabscrab!
// function grabscrab(anagram, dictionary) {
//   return dictionary.filter(w => [...w].sort().join('') === [...anagram].sort().join(''));
// }
// console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));
// console.log(grabscrab("oob", ["bob", "baobab"]));




// // Decipher This!
// function decipherThis(str) {
//   return str
//     .split(' ')
//     .map(el => String.fromCharCode(el.replace(/[^0-9]/g, '')) + el.replace(/[^a-z]/ig, ''))
//     .map(el => el.length < 3 ? el : el.slice(0, 1) + el.slice(-1) + el.slice(2, el.length - 1) + el.slice(1, 2))
//     .join(' ')
// };
// console.log(decipherThis('72olle 103doo 100ya'));
// console.log(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'));




// // Dashatize It
// function dashatize(num) {
//     return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
// }
// console.log(dashatize(274));
// console.log(dashatize(6815));
// console.log(dashatize(274));
// console.log(dashatize(6815));




// // Only Duplicates (REFACTOR)
// function onlyDuplicates(str) {
//     const reducedStr = [...str].reduce((obj, curr) => {
//             obj[curr] = obj[curr] + 1 || 1;
//             return obj;
//         }, {});
//     const grabKeys = Object.keys(reducedStr).filter(el => reducedStr[el] > 1);
//     return [...str].filter(l => grabKeys.includes(l)).join('');
// }
// console.log(onlyDuplicates('abccdefee'));
// console.log(onlyDuplicates('hello'));
// console.log(onlyDuplicates('colloquial'));




// // Coding Meetup #10 - Higher-Order Functions Series
// // Create Username
// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// function addUsername(list) {
//     const d = new Date();
//     return list.map(p => {
//         p.username = `${p.firstName.toLowerCase()}${p.lastName[0].toLowerCase()}${d.getFullYear() - p.age}`
//         return p;
//     });
// }
// console.log(addUsername(list1));




// // Coding Meetup #8 - Higher-Orer Function Series
// // Will all continents be represented?
// var list1 = [
//     { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//     { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//     { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];

// function allContinents(list) {
//     return Object.entries(list.reduce((obj, curr) => {
//         obj[curr.continent] = obj[curr.continent] + 1 || 1;
//         return obj;
//     }, {})).length === 5 ? true : false;
// }

// console.log(allContinents(list1));




// // Coding Meetup #15 - Higher Order Functions Series
// // Find the Odd Names
// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];

// function findOddNames(list) {
//   return list
//           .filter(p => p.firstName.split('')
//             .map(l => l.charCodeAt(0))
//               .reduce((sum, curr) => sum + curr, 0) % 2 !== 0);
// }
// console.log(findOddNames(list1));




// // Coding Meetup #16 - Higher Order Functions Series
// // Ask for Missing Details
// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];

// function askForMissingDetails(list) {
//   return list.filter(person => {
//     for (let item in person) {
//       if (person[item] === null) {
//         return person.question = `Hi, could you please provide your ${item}.`;
//         return person;
//       }
//     }
//   });
// }
// console.log(askForMissingDetails(list1));




// // Find the Odd Int
// function findOdd(a) {
//   let result = 0;
//   const obj = a.reduce((obj, curr) => {
//     obj[curr] = obj[curr] + 1 || 1;
//     return obj;
//   }, {})

//   for (let key in obj) {
//     if (Number(obj[key]) === 1 || Number(obj[key]) % 2 !== 0) {
//       result = key;
//     }
//   }

//   return +result;
// }
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));




// // Unique In Order (REFACTOR)
// var uniqueInOrder = function(iterable) {
//     return iterable.split('').filter((n, i) => n !== iterable[i + 1]);
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// // Count the Smiley Faces!
// function countSmileys(arr) {
//   return arr.filter(s => /^[:;][-~]?[)D]$/.test(s)).length;
// }
// console.log(countSmileys([':)', ';(', ';}', ':-D']));
// console.log(countSmileys([ ':)', ':(', ':D', ':O', ':;' ]));













/* =====================================

                5 Kyu

======================================== */













/* =====================================

                4 Kyu

======================================== */













/* =====================================

                3 Kyu

======================================== */













/* =====================================

                2 Kyu

======================================== */













/* =====================================

                1 Kyu

======================================== */
