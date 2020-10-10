function findOdd(A) {
  let count = {}
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    count[num] = count[num] ? +count[num] + 1 : 1;
  }

  let odd = Object.entries(count).map(([key, value]) => value % 2 !== 0 && key).filter(a => a);
  return parseInt(odd);
}