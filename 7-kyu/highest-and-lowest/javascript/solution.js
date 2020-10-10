function highAndLow(numbers){
  let num = numbers.split(' ').map( n =>  parseInt(n)).sort((a,b) => a - b);
  return `${num[num.length-1]} ${num[0]}`;
}