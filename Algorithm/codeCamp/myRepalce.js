function myReplace(str, before, after) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === before) {
      if (strArr[i][0].toLowerCase() !== before[0]) {
        strArr[i] = after.slice(0, 1).toUpperCase() + after.slice(1);
      } else {
        strArr[i] = after.toLowerCase();
      }
    }
  }
  return strArr.join(" ");
}

const res = myReplace(
  "A quick brown fox Jumped over the lazy dog",
  "Jumped",
  "leaped"
);
console.log(res);
