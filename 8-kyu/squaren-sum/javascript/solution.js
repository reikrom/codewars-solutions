function squareSum(numbers){
  return numbers.reduce((acc, cur) => (cur * cur) + acc, 0);
}