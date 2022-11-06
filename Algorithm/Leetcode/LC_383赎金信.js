var canConstruct = function(ransomNote, magazine) {
    let hashMark1 = new Array(26).fill(0);
    let hashMark2 = new Array(26).fill(0);

    for (let i = 0; i < ransomNote.length; i++) {
        hashMark1[ransomNote[i].charCodeAt() - 97]++;
    }

    for (let i = 0; i < magazine.length; i++) {
        hashMark2[magazine[i].charCodeAt() - 97]++;
    }

    let len = Math.max(hashMark1.length, hashMark2.length);

    for (let i = 0; i < len; i++) {
        if (hashMark2[i] === undefined || hashMark2[i] < hashMark1[i]) {
            return false;
        }
    }

    return true;
};