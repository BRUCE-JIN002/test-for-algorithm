var toGoatLatin = function(sentence) {
    const vowels = "aoeiuAOEIU";
    const copy = sentence.split(" ");
    const n = copy.length;
    const ans = [];
    for (let i = 0; i < n; i++) {
        let temp = copy[i];
        if (vowels.indexOf(temp[0]) >= 0) {
            temp += "ma";
        } else {
            temp = temp.slice(1) + temp.slice(0, 1) + "ma";
        }
        temp += "a".repeat(i + 1);
        ans.push(temp);
    }
    console.log(ans.join(" ").toString());
    return ans.join(" ").toString();
};

toGoatLatin("The quick brown fox jumped over the lazy dog");