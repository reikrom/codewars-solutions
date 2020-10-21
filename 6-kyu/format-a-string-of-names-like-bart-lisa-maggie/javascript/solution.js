function list(names){
  if (!names.length) return '';
  let arr = names.map(x=> x.name);
  if (arr.length === 2) return arr.join(' & ');
  else  { 
    return arr.join(', ').replace(/\(?(?=, \w*$)(,)/,' &');
  }
}