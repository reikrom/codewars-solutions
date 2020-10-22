"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.reduce((acc,val) => acc.concat(val)).sort((a,b) => a-b);
}