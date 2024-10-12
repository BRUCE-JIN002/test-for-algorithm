/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  let minLen = Math.min(s1.length, s2.length, s3.length);
  let matchCount = 0;
  for (let i = 0; i < minLen; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) {
      matchCount++;
    } else {
      break;
    }
  }
  return matchCount === 0
    ? -1
    : s1.length + s2.length + s3.length - 3 * matchCount;
};
