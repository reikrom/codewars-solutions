function fizzbuzz(n) {
  const arr = [...new Array(n)].map((e,i) => {
  let num = i + 1;
  let fizz = (num % 3 == 0);
  let buzz = (num % 5 == 0);
    
    if (fizz && buzz) { return 'FizzBuzz'};
    if (fizz) { return 'Fizz'};
    if (buzz) { return 'Buzz'};
    return num;
  })
  return arr;
}
