const flip=(d, arr)=> {
  return arr.sort((a , b) => d === 'R' ? a - b : b - a );
}