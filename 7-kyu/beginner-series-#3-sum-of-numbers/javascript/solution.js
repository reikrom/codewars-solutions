function getSum( a,b ) {
  let sorted = [a,b].sort((a,b) => a - b);
  let sum = 0;

   for (let i = sorted[0]; i <= sorted[1]; i++) {
     sum += i;
   }
  return sum;
}