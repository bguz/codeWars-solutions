// No Zeros for Heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    let nStr = String(n).split('');
    for (let i = nStr.length - 1; i >= 0; i--) {
      if (nStr[i] === '0') {
        nStr.pop();
      } else {
        break;
      }
    }
    return +nStr.join('');
}