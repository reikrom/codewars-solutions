function deleteNth(arr,n){
  let newArr = [];
  let count = {};
  arr.forEach(pic => {
    count[pic] = count[pic] ? count[pic] + 1: 1;
    count[pic] <= n && newArr.push(pic);
  })
  return newArr;
}