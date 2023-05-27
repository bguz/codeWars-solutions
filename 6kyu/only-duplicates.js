// Only Duplicates 

// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
    const reducedStr = [...str].reduce((obj, curr) => {
            obj[curr] = obj[curr] + 1 || 1;
            return obj;
        }, {});
    const grabKeys = Object.keys(reducedStr).filter(el => reducedStr[el] > 1);
    return [...str].filter(l => grabKeys.includes(l)).join('');
}