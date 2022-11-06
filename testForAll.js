async function* asyncGen(n) {
	for (let i = 0; i < n; i++) yield i * 2;
}

const arr = await Array.fromAsync(asyncGen(4));
console.log(arr);

// arr 将变为 [0, 2, 4, 6]
// const arr = [];
// for await (const v of asyncGen(4)) {
// 	arr.push(v);
// }

// 与上述方式是等价的
