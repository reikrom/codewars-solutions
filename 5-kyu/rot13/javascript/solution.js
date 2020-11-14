function rot13(message){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
return  message.split('').map(c => {
  let rotIndex;
  // return non alphanumeric chars
  if (c.match(/[\d\W]/)) return c;
  // upperCase chars
  else if (c === c.toUpperCase() ) {
    c = c.toLowerCase()
    rotIndex = (alphabet.indexOf(c) + 13) % 26
    return alphabet[rotIndex].toUpperCase();
  // regular chars
  } else {
    rotIndex = (alphabet.indexOf(c) + 13) % 26;
    return alphabet[rotIndex]
  }
 }).join('')
}