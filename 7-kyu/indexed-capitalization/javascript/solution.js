function capitalize(s,arr){
  let sArr = s.split('');
  arr.map(val => {
    return sArr.splice(val,1,s.charAt(val).toUpperCase());
  })
  return sArr.join('');
};