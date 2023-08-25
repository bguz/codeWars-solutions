// Help Bob Count Letters and Digits

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
    let count = 0;
    input = input.toLowerCase();
    for (let i = 0; i < input.toLowerCase().length; i++) {
        if ((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) || (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57)) {
            count++
        }
    }
    return count;
}