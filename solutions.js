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




// Create Phone Number (REFACTOR)
function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));