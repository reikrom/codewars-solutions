function isIsogram(str){
  if (!str) { return true };
 let letters = str.toLowerCase().split('');
  return 0 < letters.filter( (a, index, arr) => arr.lastIndexOf(a) !== index).length ? false : true;
  
}