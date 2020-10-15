var capitals = function (word) {
  let arr = word.split('');
  return word.split('').map((c,i) => c === c.toUpperCase() && i).filter(Number.isFinite);
};