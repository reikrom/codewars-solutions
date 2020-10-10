// return masked string
function maskify(cc) {
  let str = cc+"";
  if (cc.length < 4) {
    return cc;
  } else return "#".repeat(str.length -4)+str.slice(str.length -4);

}
