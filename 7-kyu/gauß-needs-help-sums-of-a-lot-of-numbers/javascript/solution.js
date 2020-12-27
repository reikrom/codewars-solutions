function f(n){
  if (n < 1 || !Number.isInteger(n) ) return false;
   return (n*(n + 1)) / 2;
};