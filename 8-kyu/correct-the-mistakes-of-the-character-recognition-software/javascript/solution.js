function correct(string)
{
  return string.replace(/[501]/g, c => corrections[c]);
}

const corrections = {
  5: 'S',
  0: 'O',
  1: 'I'
}