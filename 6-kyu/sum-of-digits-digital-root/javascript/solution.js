function digital_root(n) {
  while (n > 9) {
  n = (n+"").split('').reduce((acc,x) => acc + parseInt(x ),0);
  }
  return n;
}