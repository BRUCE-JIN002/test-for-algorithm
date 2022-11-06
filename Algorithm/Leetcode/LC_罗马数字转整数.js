// let obj = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
// };
// var romanToInt = function(s) {
//     const res = s.match(/(IV?X?)|(XL?C?)|(CD?M?)|[VLDM]/g);
//     let n = 0;
//     if (res) {
//         res.forEach((i) => {
//             n += obj[i];
//         });
//     }
//     console.log(res);
//     return n;
// };

// romanToInt("MCMXCIV");

// var romanToInt = function(s) {
//     let romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//     let num = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (romanNums[s[i + 1]] > romanNums[s[i]]) {
//             num += romanNums[s[i + 1]] - romanNums[s[i]];
//             i++;
//             continue;
//         }
//         num += romanNums[s[i]];
//     }
//     return num;
// };

const romanToInt = (s) => {
    let romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanNums[s[i + 1]] > romanNums[s[i]]) {
            ans -= 2 * romanNums[s[i]];
        }
        ans += romanNums[s[i]];
    }
    return ans;
};

console.log(romanToInt("IV"));