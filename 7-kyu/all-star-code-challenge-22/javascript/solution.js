function toTime(seconds) {
  let hrs = ~~(seconds / 3600);
  let mins = ~~((seconds % 3600) / 60);
  return `${hrs} hour(s) and ${mins} minute(s)`;
}