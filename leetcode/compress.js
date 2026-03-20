var compress = function (chars) {
  let write = 0; // 写指针
  let read = 0; // 读指针
  const n = chars.length;
  while (read < n) {
    let currentChar = chars[read];
    let count = 0;
    while (read < n && currentChar === chars[read]) {
      read++;
      count++;
    }
    chars[write] = currentChar;
    write++;
    if (count > 1) {
      let countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[write++] = countStr[i];
      }
    }
  }

  return write;
  //   let temp = {};
  //   if (chars.length === 1) return chars;
  //   for (let i = 0; i < chars.length; i++) {
  //     let item = chars[i];
  //     if (!temp[item]) {
  //       temp[item] = 1;
  //     } else {
  //       if (chars[i] === chars[i - 1]) {
  //         temp[item] += 1;
  //       }
  //     }
  //   }
  //   let str = "";
  //   Object.keys(temp).forEach((key) => {
  //     str += temp[key] === 1 ? key : key + temp[key];
  //   });
  //   chars = str.split("");
  //   return str.length
};
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
