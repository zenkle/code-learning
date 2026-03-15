// var kidsWithCandies = function (candies, extraCandies) {
//   let newArr = candies.map((element) => {
//     let addValue = element + extraCandies;
//     // 有没有值比现在的数据大
//     const maxEle = candies.findIndex((item) => item > addValue) > -1;
//     return !maxEle
//   });
//   return newArr;
// };
//先找最大值，比最大值大那肯定就大
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let newArr = candies.map((ele) => {
    return ele + extraCandies >= max;
  });
  return newArr;
};
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
