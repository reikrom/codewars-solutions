function points(games) {
  return games
          .map( g => g.split(':')
          .reduce( (a,b) => a === b ? 1 : a < b ? 0 : 3 ))
          .reduce( (a,b) => a + b, 0);
}