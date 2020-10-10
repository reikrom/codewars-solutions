function solution(str){
  if (str.length <= 1)  return str;
  return str.split('').reverse().join('');
}