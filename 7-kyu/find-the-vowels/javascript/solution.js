function vowelIndices(word){
  const regex = /[aeiouy]/gi;
  let indexes = [];
  word.split('').forEach((c,i) => c.match(regex) && indexes.push(i+1));
  return indexes;
}