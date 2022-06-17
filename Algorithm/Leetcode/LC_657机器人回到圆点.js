var judgeCircle = function(moves) {
    const map = new Map();
    map.set("L", -1);
    map.set("R", 1);
    map.set("U", 1);
    map.set("D", -1);
    let row = 0,
        col = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "L" || moves[i] === "R") {
            row += map.get(moves[i]);
        }
        if (moves[i] === "U" || moves[i] === "D") {
            col += map.get(moves[i]);
        }
    }
    return row === 0 && col === 0;
};

console.log(judgeCircle("RRDD"));