// Hells Kitchen 

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
    const vowels = ['e', 'i', 'o', 'u'];
    return a
          .toLowerCase()
          .split(' ')
          .map(word => word + '!!!!')
          .map(word => word.split('').map(letter => {
            if (letter === 'a') {
              return '@';
            } else if (vowels.includes(letter)) {
              return '*';
            } else {
              return letter;
            }
          }).join('')).join(' ').toUpperCase();
  }