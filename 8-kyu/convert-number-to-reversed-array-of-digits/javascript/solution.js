function digitize(n) {
  return (""+n).split('')
    .reverse()
    .map( s => parseInt(s));
}