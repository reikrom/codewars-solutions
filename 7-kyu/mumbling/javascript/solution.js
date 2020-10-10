accum = (s) => {
  return s.toLowerCase()
    .split('')
    .map( (c, index) => c.toUpperCase() + c.repeat(index))
    .join('-');
}
