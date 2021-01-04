function bandNameGenerator(str) {
  const capitalized = str[0].toUpperCase();
  const rem = str.slice(1)
  
  if (str[0] === str[str.length-1]) { 
    return capitalized + rem + rem 
  } else return "The "+ capitalized + rem;
}