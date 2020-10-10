function missingValues(arr) {
  let itemCount = {};
  let x, y;
  
  arr.forEach( value => {
      if(value in itemCount) itemCount[value] = itemCount[value] + 1;
      else itemCount[value] = 1;
  });
  
  for (const property in itemCount) {
   if (itemCount[property] === 1){
      x = parseInt(property);
   }
   if (itemCount[property] === 2){
      y = parseInt(property);
   }
  }
  return x ** 2 * y;
}