var reverseWords = function (s) {
  let arr = s.split(" ");
  let newArr = [];
  for (let index = s.length - 1; index >= 0; index--) {
    if (arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr.join(' ');
};

let s = "the sky is blue";
console.log(reverseWords(s));
