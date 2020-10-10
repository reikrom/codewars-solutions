function findLongest(array){
 let digitLengths = array.map(n => (n+"").length );
  let index = digitLengths.indexOf(Math.max(...digitLengths));

  return array[index];
}