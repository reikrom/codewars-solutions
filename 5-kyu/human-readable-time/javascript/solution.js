function humanReadable(seconds) {
  var hh = ~~(seconds / 3600);
  var mm = ~~((seconds % 3600) / 60);
  var ss = ~~seconds % 60;

  if (hh < 10)  hh = `0${hh}`; 
  if (mm < 10)  mm = `0${mm}`; 
  if (ss < 10)  ss = `0${ss}`; 

  
  return `${hh}:${mm}:${ss}`
}