function bouncingBall(h,  bounce,  window) {
 const condition = h > 0 &&  bounce > 0 && bounce < 1 && h > window;
  if (condition) {
    return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
  } else return -1;
}