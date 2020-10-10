function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) { sharkSpeed /= 2 };
  if (sharkDistance / sharkSpeed > pontoonDistance / youSpeed) {
    return 'Alive!'
  } else return 'Shark Bait!'
  
}