function reverseWords(str) {
  return str
          .split(' ')
          .map(w => w
                     .split('')
                     .reverse()
                     .join(''))
          .join(' ');
}