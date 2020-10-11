function solve(s){
  const regex = /[^aoeiu]/i
  return Math.max(...s.split(regex).map(c => c.length));
}

