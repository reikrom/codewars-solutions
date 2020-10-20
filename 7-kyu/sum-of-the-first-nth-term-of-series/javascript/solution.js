function SeriesSum(n)
{
  let rev = 1;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      res = 1;
    }
    else { 
      rev += 3; 
      res = res + ( 1 / rev );
    }
  }
  return res.toFixed(2)
}