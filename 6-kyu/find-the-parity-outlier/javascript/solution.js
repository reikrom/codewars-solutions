function findOutlier(integers){
  let evens = 0;
  
  for (let i = 0; i<3; i++){
    integers[i] % 2 === 0 && evens++;
  }
  return integers.filter(x => evens > 1 ? x % 2 !== 0 : x % 2 === 0 )[0];
}

