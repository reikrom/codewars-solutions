function fix(paragraph){
  if (paragraph === '') return '';
  const arr = paragraph.split('. ');
  return arr.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('. ');
}