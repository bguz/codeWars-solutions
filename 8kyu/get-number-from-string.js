// Get Number From String 

// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue;
        } else if (Number(s[i]) >= 0) {
            result.push(s[i]);
        }
    }
    return Number(result.join(''));
}