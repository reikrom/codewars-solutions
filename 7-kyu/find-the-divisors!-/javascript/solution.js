function divisors(n) {
const arr = [...Array(n).keys()].filter((x) => x !== 1 && n % x  === 0);
  return arr.length ? arr : `${n} is prime`;
};