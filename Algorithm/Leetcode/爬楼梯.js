var steps = [1, 2];
var climbStairs = function(n) {

    for (let i = 2; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n - 1];
};

console.log(climbStairs(3));
console.log(steps);