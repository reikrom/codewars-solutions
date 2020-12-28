function cookingTime(eggs) {
  if (!Number.isInteger(eggs)) return false;
  if (eggs < 0) return false;
  if (eggs === 0) return 0;
  if (eggs <= 8) return 5;
  else return Math.ceil(eggs/8)*5;
}