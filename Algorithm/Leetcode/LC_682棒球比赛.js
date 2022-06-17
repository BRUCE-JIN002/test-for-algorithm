var calPoints = function(ops) {
    let stack = [];
    let res = 0;
    for (let i = 0; i < ops.length; i++) {
        if (!isNaN(Number(ops[i]))) {
            stack.push(Number(ops[i]));
        }
        console.log(stack);
        if (ops[i] === "+") {
            let ans = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(ans);
        }
        if (ops[i] === "C") {
            stack.pop();
        }
        if (ops[i] === "D") {
            let ans = stack[stack.length - 1] * 2;
            stack.push(ans);
        }
    }
    console.log(stack);
    for (let i = 0; i < stack.length; i++) {
        res += stack[i];
    }
    console.log(res);
    return res;
};

let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
calPoints(ops);