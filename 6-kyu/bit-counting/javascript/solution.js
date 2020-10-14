var countBits = function(n) {
  return n.toString(2).split('').reduce((a,b) => Number(a) + Number(b), 0);
};