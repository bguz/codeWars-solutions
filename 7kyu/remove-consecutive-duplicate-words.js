// Remove Consecutive Duplicate Words 

// DESCRIPTION:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
    const stringArr = string.split(' ');
    const newArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] !== stringArr[i + 1]) {
            newArr.push(stringArr[i]);
        }
    }
    return newArr.join(' ');
}