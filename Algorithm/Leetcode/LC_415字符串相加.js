var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        add = 0;
    const ans = [];
    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1.charAt(i) - "0" : 0;
        const y = j >= 0 ? num2.charAt(j) - "0" : 0;
        const result = x + y + add;
        ans.push(result % 10);
        add = Math.floor(result / 10); //进位
        i--;
        j--;
    }
    return ans.reverse().join("");
};
let num1 = "123";
let num2 = "11";
console.log(addStrings(num1, num2));