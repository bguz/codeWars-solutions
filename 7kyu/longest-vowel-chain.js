// Longest Vowel Chain (No Regex)

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const chain = [];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            chain.push(count);
            count = 0;
        } else {
            count++;
        }
    }
    return Math.max(...chain);
}
console.log(solve('ultrarevolutionariees'));