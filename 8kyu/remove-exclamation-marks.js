// Remove Exclamation Marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('').filter(letter => letter !== '!').join('');
}