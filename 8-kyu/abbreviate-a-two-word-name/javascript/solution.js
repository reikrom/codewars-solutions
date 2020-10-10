function abbrevName(name){
  let initials = name.split(' ')
                  .map(n => n.slice(0,1)
                  .toUpperCase());
  return initials.join('.');
}