function iqTest(numbers){
  const n = numbers.split(' ');
  const evens = [n[0],n[1],n[2]].filter(x => x % 2 === 0).length;
  return evens === 1 || evens === 0 ?
    n.findIndex(x => x % 2 ===0) + 1
   :n.findIndex(x => x % 2 !==0) + 1;
}