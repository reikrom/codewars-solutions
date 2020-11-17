function high(x){
  const values = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = {};
  x.split(' ').forEach(word => {
    res[word] = word.split('').reduce((acc,cur) => acc += values.indexOf(cur) +1,0)
  })
  return Object.keys(res).reduce((a, b) => res[a] >= res[b] ? a : b);
}