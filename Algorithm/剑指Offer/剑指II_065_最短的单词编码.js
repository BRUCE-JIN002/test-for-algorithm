var minimumLengthEncoding = function(words) {
    let good = new Set(words);
    for (const word of words) {
        for (let i = 1; i < word.length; i++) {
            good.delete(word.substring(word.length - i));
        }
    }
    ans = 0;
    for (const el of good) {
        ans += el.length + 1;
    }
    return ans;
};

let words = ["time", "me", "bell"];
minimumLengthEncoding(words);