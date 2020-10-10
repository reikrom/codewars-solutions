var countSheep = function (num){
  const sheep = new Array(num).fill().map((shep, i) => `${i+1} sheep...`).join(''); 
  return sheep;
}