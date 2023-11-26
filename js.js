// Detect pangram
function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < alphabet.length; i++) {
    const regexp = new RegExp(`${alphabet[i]}`);
    console.log(string.toLowerCase().match(regexp));
    if (!string.toLowerCase().match(regexp)) {
      return false;
    }
  }
  return console.log('pangram');
}

isPangram('This is not a pangram.');