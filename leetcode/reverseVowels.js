var reverseVowels = function (str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let s = str.split("");
  
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(s[left])) {
      left++;
    }
    while (left < right && !vowels.has(s[right])) {
      right--;
    }
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join('')
};
const s = "IceCreAm";
console.log(reverseVowels(s));
