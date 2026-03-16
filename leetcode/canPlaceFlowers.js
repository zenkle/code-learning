// 当前位置的值为0，左右两边也都为0就可以种花
var canPlaceFlowers = function (flowerbed, n) {
  if (n == 0) return true;
  let len = flowerbed.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] == 0) {
      let enptyLeft = i == 0 || flowerbed[i - 1] == 0;
      let emptyRight = i == len - 1 || flowerbed[i + 1]==0;
      if (enptyLeft && emptyRight) {
        flowerbed[i] = 1;
        count++;
      }
      if (count >= n) return true;
    }
  }
  return count >= n;
};

console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2));
