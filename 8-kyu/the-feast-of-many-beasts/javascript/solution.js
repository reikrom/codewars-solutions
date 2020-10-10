function feast(beast, dish) {
  const a = [...beast];
  const b = [...dish];
return a.pop() === b.pop() && a.shift() === b.shift();
}

