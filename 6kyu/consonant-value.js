// Consonant Value 

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

function solve(s) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let str = '';
    const arr = [];

    s.split('').map(l => {
        if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
            arr.push(str);
            str = '';
        } else {
            str += l;
        }
    })
    arr.push(str);
    return Math.max(...arr.map(s => s.split('').map(l => alphabet.indexOf(l) + 1).reduce((sum, curr) => sum + curr, 0)));
}