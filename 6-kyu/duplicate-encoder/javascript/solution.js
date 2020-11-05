function duplicateEncode(word){
    console.log(word)
  const arr = word.toLowerCase().split('');
  let newArr = []
  for (let i=0; i< arr.length; i++) {
    newArr.push(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ? '(' : ')' )
  }
  return newArr.join('');
}
