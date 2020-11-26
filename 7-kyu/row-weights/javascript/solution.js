function rowWeights(arr){
  let teams = [0,0];
  arr.forEach((m,i) => i % 2 === 0 ? teams[0] += m : teams[1] += m);
  return teams;
}