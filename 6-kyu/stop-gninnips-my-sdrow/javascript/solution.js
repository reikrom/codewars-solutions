function spinWords(words){
  return words.split(' ')
          .map( w => w.length >= 5 ? w.split('').reverse().join('') : w)
          .join(' ');
}