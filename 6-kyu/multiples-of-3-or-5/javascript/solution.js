function solution(number){
  if (number <= 0) return 0;
  return [...Array.from(
    new Array(number), (_, i) => i % 3 === 0 || i % 5 === 0 ? i : '' )]
    .reduce((a,b) => Number(a) + Number(b),0);

}