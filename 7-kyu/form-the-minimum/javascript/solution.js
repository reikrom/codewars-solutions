function minValue(values){
  const newArr = [...new Set(values)].sort((a,b) => a - b);
  return parseInt(newArr.map(n=> n+"").join(''),10);
}