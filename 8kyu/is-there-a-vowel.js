// Is There a Vowel There? 

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    return a.map(digit => {
      if (digit === 97) {
        return digit = 'a';
      } else if (digit === 101) {
        return digit = 'e';
      } else if (digit === 105) {
        return digit = 'i';
      } else if (digit === 111) {
        return digit = 'o';
      } else if (digit === 117) {
        return digit = 'u';
      } else {
        return digit;
      }
    })
}