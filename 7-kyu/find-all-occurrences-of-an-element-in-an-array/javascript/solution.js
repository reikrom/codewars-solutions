const findAll = (arr, n) => {
  let indexes = [];
  arr.forEach((num,i) => num === n && indexes.push(i))
  return indexes;
}