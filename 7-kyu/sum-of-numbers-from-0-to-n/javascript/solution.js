var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return count+"<0";
    if (count === 0) return "0=0";
    
    let chain = '';
    let sum = 0;
    
    for (let i = 0; i <= count; i ++) {
      if (i === count) { 
        chain = chain.concat(`${i} =`)
      } else
      chain = chain.concat(`${i}+`);
      sum += i;
    }
    return chain +" "+sum;
  };

  return SequenceSum;

})();