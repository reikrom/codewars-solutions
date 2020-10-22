function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  function isHomogenous(arr) { 
    return arr.length && arr.every((el,i) => typeof arr[0] === typeof(arr[i])); 
  }
  
  return arrays.filter(isHomogenous);
}