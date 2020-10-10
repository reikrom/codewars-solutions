function squareDigits(num){
  let result = num.toString()
                    .split('')
                    .map( n => parseInt(n) * parseInt(n))
                    .join('');
  return parseInt(result);
}