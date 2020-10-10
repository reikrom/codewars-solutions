function getMiddle(s){
  let median = Math.floor(s.length / 2);
  
  if (s.length % 2 === 0) {
    return s[median-1]+s[median]
  } else {
    return s[median]
  }
}