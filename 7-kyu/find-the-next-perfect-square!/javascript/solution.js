function findNextSquare(sq) {
  let sqrted = Math.sqrt(sq)
  return Number.isInteger(sqrted) ? (sqrted +1) * (sqrted +1) : -1;
}