function averages(numbers) {
  // remove trash inputs
 if (!numbers || numbers.length <= 1) return [];
  else return numbers.map((num,i,arr) => (num + arr[i+1])/2)
  .slice(0,-1);
}