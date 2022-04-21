const loopyLighthouse = function(range, multiples, words) {
  // Added error handling for parameters
  if (Array.isArray(range) && Array.isArray(multiples) && Array.isArray(words)
   && range.length === 2 && multiples.length === 2 && words.length === 2) {
    for (let num of range) {
      if (typeof num !== 'number') {
        console.log('Invalid Input');
        return;
      }
    }
    for (let num of multiples) {
      if (typeof num !== 'number') {
        console.log('Invalid Input');
        return;
      }
    }
    for (let word of words) {
      if (typeof word !== 'string') {
        console.log('Invalid Input');
        return;
      }
    }
    for (let i = range[0]; i <= range[1]; i++) {
      if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
        console.log(`${words[0]}${words[1]}`);
      } else if (i % multiples[1] === 0) {
        console.log(words[1]);
      } else if (i % multiples[0] === 0) {
        console.log(words[0]);
      } else {
        console.log(i);
      }
    }
  } else {
    console.log('Invalid Input');
  }
};

loopyLighthouse([2, 42], [2, 5], ['Batty', "Beacon"]);