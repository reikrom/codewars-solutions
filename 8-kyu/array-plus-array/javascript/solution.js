function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a + b, 0);
}