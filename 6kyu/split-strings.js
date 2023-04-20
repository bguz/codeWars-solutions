// Split Strings 

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    str = str.length % 2 !== 0 ? `${str}_` : str;
    const result = [];
    
    for (let i = 0; i < str.length; i += 2) {
        result.push([...str].splice(i, 2));
    }

    return result.map(arr => arr.join(''));
}