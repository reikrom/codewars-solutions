function solution(pairs){
 const str = [...Object.entries(pairs)].map(([a,b]) => `${a} = ${b}`);
 return str.join(',');

 }