function firstNonConsecutive (arr) {
  let odd =  arr.find((n, i) => n != i + arr[0]);
  return Number.isInteger(odd) ? odd : null;
}