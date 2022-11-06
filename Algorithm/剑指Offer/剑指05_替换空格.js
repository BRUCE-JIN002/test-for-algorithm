var replaceSpace = function(s) {
    let strArray = Array.from(s);
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === " ") {
            strArray.splice(i, 1, "%20");
        }
    }
    return strArray.slice(",").join("");
};

let s = "    ";

console.log(replaceSpace(s));