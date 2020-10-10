const reverseSeq = n => {
  return new Array(n).fill().map((_,i) => i + 1).sort((a,b) => b - a);
};