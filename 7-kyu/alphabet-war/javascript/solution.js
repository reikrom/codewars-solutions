function alphabetWar(fight)
{
  const  left = {'w': 4, 'p': 3, 'b': 2, 's': 1};
  const  right = {'m': 4, 'q': 3, 'd': 2, 'z': 1};
  
  // w p b s  |0|   m q d z
  let balance = 0;

  fight.split('').forEach(x => {
    if (x in left) balance += left[x];
    else if (x in right) balance -= right[x];
  })
  if (balance === 0) return "Let's fight again!";
  else return balance > 0 ? 'Left side wins!' : 'Right side wins!';
}