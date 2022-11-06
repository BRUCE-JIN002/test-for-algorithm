var uncommonFromSentences = function(s1, s2) {
    const str = s1 + " " + s2;
    let freq = new Map();
    freq = insert(str, freq);
    const ans = [];
    for (const entry of freq.entries()) {
        if (entry[1] === 1) {
            ans.push(entry[0]);
        }
    }
    return ans;
};

//构建哈希表
const insert = (s, freq) => {
    const arr = s.split(" ");
    for (const word of arr) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    return freq;
};

let s1 = "d b zu d t";
let s2 = "udb zu ap";

uncommonFromSentences(s1, s2);