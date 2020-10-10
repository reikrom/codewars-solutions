function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) { return false; }
  if (Date.parse(currentDate) > Date.parse(expirationDate )) {return false; }
  return true;
}