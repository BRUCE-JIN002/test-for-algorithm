const str = "asfsdvfuysdasasaasfidf";

const result = [...str].reduce((acc, cur) => {
  return (acc[cur] = (acc[cur] || 0) + 1), acc;
}, {});

console.log(result);

function test() {
  return 1, 2, 3; // 只返回最后一个值
}

console.log(test());
