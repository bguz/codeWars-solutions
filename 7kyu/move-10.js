// Move 10 (No Regex)

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return s
    .toLowerCase()
    .split("")
    .map((l) => {
      let i = alphabet.indexOf(l) + 10;
      console.log(i);
      if (i > alphabet.length - 1) {
        i = i - alphabet.length;
      }
      return alphabet[i];
    })
    .join("");
}
