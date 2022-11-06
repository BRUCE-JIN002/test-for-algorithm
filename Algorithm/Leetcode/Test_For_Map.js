const json = '{"result": true, "count": 32}';

const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);