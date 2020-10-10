var number = function(busStops){
  return busStops.reduce((rem,[on, off]) => rem += on - off, 0);
}