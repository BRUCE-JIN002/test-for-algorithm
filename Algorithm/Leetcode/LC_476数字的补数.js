var findComplement = function(num) {};

function toBinary(num) {
    res = [];
    while (num) {
        res.push(num % 2);
        num = Math.floor(num / 2);
    }
    let result = 0;
    for (let i = 0; i < res.length; i++) {
        result += Number(!res[i]) * Math.pow(2, i);
    }
    return result;
}

console.log(toBinary(5));