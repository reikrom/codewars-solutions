function predictAge(...ages){
  return Math.floor(Math.sqrt([...ages].map(n => n*n).reduce((a,b) => a+b, 0)) / 2);
}