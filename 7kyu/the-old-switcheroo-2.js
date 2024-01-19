// The Old Switcheroo 2

// This is a follow up from my kata The old switcheroo

// Write the function :

// function encode(str)
// that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

// encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
// encode('codewars') == '315452311819'
// encode('abc-#@5') == '123-#@5'
// String are case sensitive.

// // Bonus point if you don't use toLowerCase()

function encode(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return str.toLowerCase().split('').map((l, i) => alphabet.includes(l) ? alphabet.indexOf(l) + 1 : l).join('');
}