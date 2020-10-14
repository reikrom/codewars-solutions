var moveZeros = function (arr) {
  let newArr = arr.filter(n => n !== 0);
  let zeros = arr.length - newArr.length;
  console.log(zeros)
  return [...newArr, ...Array(zeros).fill(0)]
}