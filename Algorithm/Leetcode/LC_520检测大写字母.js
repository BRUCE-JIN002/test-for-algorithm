var detectCapitalUse = function(word) {
    let len = word.length;
    if (len === 1) {
        return true;
    }
    let first, second;
    if (word[0] >= "A" && word[0] <= "Z") {
        first = true;
    } else {
        first = false;
    }
    if (word[1] >= "A" && word[1] <= "Z") {
        second = true;
    } else {
        second = false;
    }

    if (
        len === 2 &&
        ((first && second) || (!first && !second) || (first && !second))
    ) {
        return true;
    } else if (len === 2 && !first && second) {
        return false;
    }
    if (first && second) {
        //首字母和第二位都是大写
        for (let i = 2; i < len; i++) {
            if (word[i] < "A" || word[i] > "Z") {
                return false;
            }
        }
        return true;
    }
    //首字母大写， 第二位小写
    if (first && !second) {
        for (let i = 2; i < len; i++) {
            if (word[i] >= "A" && word[i] <= "Z") {
                return false;
            }
        }
        return true;
    }
    //都是小写
    if (!first && !second) {
        for (let i = 2; i < len; i++) {
            if (word[i] >= "A" && word[i] <= "Z") {
                return false;
            }
        }
        return true;
    }

    if (!first && second) {
        return false;
    }
};