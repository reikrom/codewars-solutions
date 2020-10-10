function countPositivesSumNegatives(input) {
  if (input && input.length) {
    return [
      input.filter(p => p > 0).length,
      input.filter(n => n < 0).reduce((a,b)=> a+b,0)
    ];
  } else return [];
}