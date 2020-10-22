Array.prototype.numberOfOccurrences = function(n) {
  return this.filter(val => val === n).length;
}