function pigIt(str){
  return str.split(' ').map(w => { 
    if (w.length === 1 && w.match(/\W/) ) 
    {
      return w; 
    } 
    else return w.slice(1) + w.charAt(0)+"ay" }).join(' ');

}