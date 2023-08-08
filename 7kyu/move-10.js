// Move 10

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

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
