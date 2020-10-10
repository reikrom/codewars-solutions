function validatePIN (pin) {
  return /^([\d]{6})$|^([\d]{4})$/g.test(pin);
}