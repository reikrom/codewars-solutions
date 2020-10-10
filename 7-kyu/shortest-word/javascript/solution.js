function findShort(s){
  let result = s
    .split(' ')
    .reduce( (a,b) => a.length <= b.length ? a : b, 0);
 
  return result.length;
}