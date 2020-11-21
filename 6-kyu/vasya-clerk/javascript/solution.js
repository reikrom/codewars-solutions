function tickets(peopleInLine){
  let [c25, c50, c100] = [0,0,0];
  let answer = "YES";
  
  peopleInLine.forEach(bill => {
    if (bill === 25 ) {
      c25++
    }
    else if (bill === 50 && c25 > 0) {
      c25-- , c50++
    }
    else if (bill === 100 && c25 >= 1 && c50 >= 1 ) {
      c100++, c50--, c25--
    }
    else if (bill === 100 && c25 >= 3) {
      c100++ , c25 -= 3
    }
    else answer = "NO"
  
  });
  return answer;
}