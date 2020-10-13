function toCamelCase(str){
  let arr = [];
  arr = str.includes('_') ? str.split('_') : str.split('-');
  return arr.map( (s,i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s ).join('');
}