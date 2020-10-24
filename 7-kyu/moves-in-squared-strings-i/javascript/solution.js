function vertMirror(str) {
  return str.split('\n').map(s => s.split('').reverse().join('')).join('\n');
}
function horMirror(str) {
    return str.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}