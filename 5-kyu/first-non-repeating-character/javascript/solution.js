function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split('');
  let res = '';  
  for (i = 0; i<arr.length; i++ ){
     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
       return res = s[i];
     }  
    }
  return res;
  }