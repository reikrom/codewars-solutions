function triangle(row) {
  const color = {
    'GG': 'G',
    'BB': 'B',
    'RR': 'R',
    'BG': 'R',
    'RG': 'B',
    'BR': 'G',
    'GB': 'R',
    'GR': 'B',
    'RB': 'G',
  }
  let res = '';

  if (row.length === 1) return row;
  for (let i = 0; i < row.length -1; i++) {
    res += color[row[i]+row[i+1]]
  }
  return (res === 1 ) ? row : triangle(res);
}
