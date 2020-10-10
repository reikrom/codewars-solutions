function capitalize(s){
  let newStr = s.toLowerCase().split('');
  let s1, s2;
  
  s1= newStr
    .map((character, index) => index % 2 ? character : character.toUpperCase())
    .join('');
  s2= newStr
    .map((character, index) => index % 2 ? character.toUpperCase() : character)
    .join('');
  return [s1, s2];
};

