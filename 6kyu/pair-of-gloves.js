// Pair of Gloves 

// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
    return Object.values(gloves.reduce((obj, curr) => {
        obj[curr] = obj[curr] + 1 || 1;
        return obj;
    }, {})).map(val => val % 2 !== 0 ? val - (val % 2) : val).reduce((sum, curr) => sum + curr, 0) / 2;
}