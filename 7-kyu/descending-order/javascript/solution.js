function descendingOrder(n){
  return Number(n
                .toString()
                .split('')
                .map( n => parseInt(n))
                .sort((a,b) => b - a)
                .join('')
               );
}