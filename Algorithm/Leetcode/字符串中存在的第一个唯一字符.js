// //有问题

// var firstUniqChar = function(s) {
//     let mark = [];
//     for (let i = 0; i < s.length; i += 1) {
//         mark[s.charCodeAt(i) - 'a'.charCodeAt()] += 1;
//     }
//     console.log(mark);
//     for (let i = 0; i < s.length; i += 1) {
//         if (mark[s.charCodeAt(i) - 'a'.charCodeAt()] === 1) {
//             return i;
//         }
//     }
//     return -1;
// }

// // let s = 'z';
// let str = "leetcode";

// // const res = s.charCodeAt(0) - 'a'.charCodeAt(0);

// // console.log('a'.charCodeAt());
// // console.log(res);

// console.log(firstUniqChar(str));


function cmp(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
};


let str = "leetcode";
const l = str.sort();
console.log(l);