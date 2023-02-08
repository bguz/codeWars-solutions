// Most Digits 

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let num = '';
    for (let i = 0; i < array.length; i++) {
        if (String(array[i]).length > num.length) {
            num = String(array[i]);
        }
    }
    return Number(num);
}