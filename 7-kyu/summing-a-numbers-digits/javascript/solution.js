function sumDigits(number) {
  return [...Math.abs(number)+""].reduce((a,b) => parseInt(a)+ parseInt(b), 0);
}
