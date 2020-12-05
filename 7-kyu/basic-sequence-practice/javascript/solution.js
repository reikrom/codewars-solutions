function sumOfN(n) {
  let arr = [];
  let negative = false;
  if (n < 0) negative = true, n = -n;
    
 for (let i = 0; i <= n; i ++) {
   arr[i] = i
   if (arr[i-1] > 0) arr[i] += arr[i-1]
 }
  if (negative) {
    return arr.map(nr => {
      // 0 * -1 = -0
      return nr > 0 ? nr * -1 : 0
    })
    } else return arr
};