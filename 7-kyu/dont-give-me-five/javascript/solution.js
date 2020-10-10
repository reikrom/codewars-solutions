function dontGiveMeFive(start, end) {
  let arr = [];
  let i = start;
  while ( i <= end ) {
    !(i+"").includes("5") && arr.push(i) 
    i++
  }
  return arr.length;
}