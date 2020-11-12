//return the total number of smiling faces in the array
function countSmileys(arr) {
  const faces = /[:;][-~]?[D\)]/g
  return arr.filter(n => n.match(faces)).length;
}