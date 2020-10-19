function isSortedAndHow(arr) {
  let ascending = 0;
  let descending = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < arr[i+1]) ascending++;
    if (arr[i] > arr[i+1]) descending++
  }
  if (ascending > 0 && descending === 0) return 'yes, ascending';
  else if (descending > 0 && ascending === 0) return 'yes, descending';
  else return 'no';
}