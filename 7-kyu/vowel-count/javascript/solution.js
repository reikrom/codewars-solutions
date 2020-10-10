function getCount(str) {
  let vowelsCount = 0;
  const regex = RegExp('[aeiou]');
  str.split('').map( c => regex.test(c) && vowelsCount++ );
  
  return vowelsCount;
}