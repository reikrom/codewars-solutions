function howMuchILoveYou(nbPetals) {
  const res = ['I love you','a little','a lot','passionately','madly','not at all'];
  return res[(nbPetals - 1) % 6];
}
