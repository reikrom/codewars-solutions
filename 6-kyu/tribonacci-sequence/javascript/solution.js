function tribonacci(sig,n){
  let tri = sig;
  for (i = 0; i < n; i++) {
    tri.push(tri[i] + tri[i+1] + tri[i+2]);
  }
  return tri.slice(0,n);
}