function hello(name) {
  if (!name ) return 'Hello, World!';
  const capitalizedName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
  return `Hello, ${capitalizedName}!`;
}