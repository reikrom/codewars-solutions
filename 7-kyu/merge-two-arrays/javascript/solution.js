function mergeArrays(a, b) {
  let arr = [];
  let length = a.length > b.length ? a.length : b.length;
  
  for (let i = 0; i < length; i++) {
    a[i] && arr.push(a[i]),
    b[i] && arr.push(b[i]);
    }
  return arr;
}