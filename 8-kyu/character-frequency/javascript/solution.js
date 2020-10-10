function charFreq(message) {
  let counts = {};
  
  for (let i = 0; i < message.length; i++) {
    var num = message[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}