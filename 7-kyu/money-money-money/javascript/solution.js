function calculateYears(principal, interest, tax, desired) {
  let P = principal, I = interest, T = tax, D = desired, Y = 0;
  if (P>=D) { return 0 };
  while (P <= D ) {
      P += ((P * I) - ((P * I) * T))
      Y++
    };

  return Y;
}