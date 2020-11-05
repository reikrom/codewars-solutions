function evenOrOdd(str) {
  const arr = str.split('');
  const odd = arr.reduce((acc, e) => e % 2 !== 0 ? acc + parseInt(e) : acc, 0 )
  const even = arr.reduce((acc, e) => e % 2 === 0 ? acc + parseInt(e) : acc, 0 )
  if (odd === even) return 'Even and Odd are the same';
  if (odd > even) return 'Odd is greater than Even';
  else return 'Even is greater than Odd';
}