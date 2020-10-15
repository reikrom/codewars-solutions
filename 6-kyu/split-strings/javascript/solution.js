function solution(str){
  if (!str) return [];
  if (str.length % 2 !== 0 ) {
    str = str+"_"
  }
  return str.match(/[\w]{2}/g);
}