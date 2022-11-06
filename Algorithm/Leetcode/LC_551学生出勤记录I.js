var checkRecord = function(s) {
    let cntA = 0;
    let cntL = 1,
        maxL = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            cntA++;
        }
        if (s[i] === "L" && s[i - 1] === "L") {
            cntL++;
            if (cntL > maxL) {
                maxL = cntL;
            }
        } else {
            cntL = 1;
        }
    }
    // console.log("cntA: ", cntA, " ", "maxL: ", maxL);
    if (maxL < 3 && cntA < 2) {
        return true;
    }
    return false;
};

console.log(checkRecord("LALLPP"));