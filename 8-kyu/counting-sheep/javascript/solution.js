function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach( s => { s && count++});
  return count;
//   return count > 0 ? ` There are ${count} sheeps in total`: 'There are no sheeps at all'
}