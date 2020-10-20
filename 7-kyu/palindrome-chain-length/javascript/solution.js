var palindromeChainLength = function(n) {
  let res = 0;
  let pali = parseInt((n+"").split('').reverse().join(''))
   while (pali !== n) {
     console.log(n, pali)
      n = parseInt(n) + parseInt(pali);
      pali = parseInt((n + "").split('').reverse().join(''));
      ++res;
    }
  return res;
};