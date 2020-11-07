function isValidWalk(walk) {
  if (!walk || walk.length !== 10 ) return false
  else {
    let n = 0,e = 0,s = 0,w = 0;
    var count = 0;
    for(var i = 0; i < walk.length; ++i){
      switch(walk[i]) {
        case 'n':
        n += 1;
        break;
        case 'e':
        e += 1;
        break;
        case 's':
        s += 1;
        break;
        case 'w':
        w += 1;
        break;
      }
    }
    return n === s && e === w;
  }
}