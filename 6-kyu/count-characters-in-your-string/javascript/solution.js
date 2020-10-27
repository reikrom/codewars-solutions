function count (string) {  
  let count = {}
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    count[char] = count[char] ? count[char] += 1: 1;
  }
   return count;
}