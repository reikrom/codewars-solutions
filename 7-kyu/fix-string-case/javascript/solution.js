function solve(s){
  const upperCase = s.match(/[A-Z]/g);
  const lowerCase = s.match(/[a-z]/g);
    if (!upperCase || !lowerCase ) return s;
  else return upperCase.length > lowerCase.length ? s.toUpperCase() : s.toLowerCase();
}