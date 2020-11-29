function pattern(n){
  var output="";
  // remove trash inputs
  if (n < 0) return '';
  
  for (let i = 1; i <= n; i++) {
    output = output +=((""+i).repeat(i));
    
    // add newline except last line
    if ( i !== n) output += "\n";
  }
  return output;
}