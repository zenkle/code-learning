var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);
  answer[0] = 1;
  // 左乘积
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  // 右乘积并和左乘积相乘
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }
  return answer;
};
