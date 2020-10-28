function sortArray(arr) {
  let odds = arr.filter(n => n % 2).sort((a,b) => a - b);
  return arr.map(x => x % 2 ? odds.shift() : x);
  
}