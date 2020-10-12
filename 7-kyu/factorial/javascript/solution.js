function factorial(n)
{
  if ( n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12');
  if (n > 1 ) return n * factorial(n -1);
  else return 1;
}

