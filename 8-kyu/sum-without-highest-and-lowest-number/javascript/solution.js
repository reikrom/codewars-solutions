 const sumArray = array => array ? array.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
