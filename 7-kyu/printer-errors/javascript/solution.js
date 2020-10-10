function printerError(s) {
  let regex = /[n-z]/gi;
  let errors = Array.from(s).filter( x=> x.match(regex));
  return `${errors.length}/${s.length}`;
}