var numberOfLines = function(widths, s) {
    let row = 1; //默认至少有一行
    let col = 0;
    for (let i = 0; i < s.length; i++) {
        let count = widths[s[i].charCodeAt() - "a".charCodeAt()];
        if (col + count > 100) {
            row += 1;
            col = 0;
        }
        col += count;
    }
    return [row, col];
};

let widths = [
    4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10,
];

let s = "abcdefghijklmnopqrstuvwxyz";

console.log(numberOfLines(widths, s));