function solution(digits){
  let res = 0;

  for (let i = 0; i < digits.length -4; i++) {
    let nr = parseInt(digits.slice(i,i+5));
    if (nr > res) res = nr;
  }
  return res;
}