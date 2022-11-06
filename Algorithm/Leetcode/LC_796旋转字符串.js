var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    let str = s.repeat(2);
    if (str.indexOf(goal) >= 0) {
        return true;
    }
    return false;
};

console.log(rotateString("abcde", "bcead"));