function solution(str, ending){
  let special = /[\[\\\^\$\.\|\?\*\+\(\)]/g;
  
  // decontaminate
  if ( ending.match(special)) {
   ending = ending.split('').map(c => c.match(special) ? "\\"+c : c).join('');
  };
  
  const regex = new RegExp(ending +"$");

  return str.match(regex) ? true : false ;
}