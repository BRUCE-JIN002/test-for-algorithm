const obj1 = {
    a: [1, 2, 3],
    b: [4, 5, 6],
};

console.log(obj1);

for (const el of Object.values(obj1)) {
    console.log(`${el}`, el[0], el[1], el[2]);
}