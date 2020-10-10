var summation = function (num) {
  let arr = new Array(num).fill().map((n, i) => Number(i + 1)).reduce((a,b) => a + b);
  return arr;
}