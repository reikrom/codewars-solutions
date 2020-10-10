function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((sum, x) => sum + x, 0) / classPoints.length;
  return yourPoints > average ? true : false;
}
