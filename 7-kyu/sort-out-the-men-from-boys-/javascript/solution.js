function menFromBoys(arr){
  arr = [...new Set(arr)]
  let men = arr.filter(x=> x % 2 === 0 ).sort((a,b) => a-b);
  let boys = arr.filter(x=> x % 2 !== 0 ).sort((a,b) => b-a);
  return men.concat(boys);
}