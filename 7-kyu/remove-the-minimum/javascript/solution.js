function removeSmallest(numbers) {
  let removed = [...numbers];
  let indexOfMin = removed.indexOf(Math.min(...removed));
  removed.splice(indexOfMin,1);
  
  return removed;
}