function seven(m) {
    let steps = 0;
    if (m < 100) return [m,steps];
    let mArr = [...""+m];
    while (mArr.length >= 2) {
      steps ++;
      let y = parseInt(mArr.pop())*2;
      let x = parseInt(mArr.join(''));
      if (x-y < 100) return [x-y,steps];
      mArr = [...""+(x-y)];
      
      

    }
}