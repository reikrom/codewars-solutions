function solve(arr){
  const sorted = [...arr].sort((a,b) => a - b);
  return arr.map((_, i) => (i % 2 === 0 ? sorted.pop() : sorted.shift() ));
};

