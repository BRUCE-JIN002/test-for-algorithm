function cmp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

let arr = [1, 2, 4, 9, 7, 5, 2];

console.log(arr.sort(cmp));

const cmp1 = (a, b) => a - b;

const months = ['March', 'Jan', 'Feb', 'Dec'];

console.log(months.sort(cmp));
console.log(arr.sort(cmp1));