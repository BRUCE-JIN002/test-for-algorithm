const findJudge = (n, trust) => {
  const trustMap = new Map();

  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];

    if (trustMap.has(a)) {
      trustMap.set(a, trustMap.get(a).concat(b));
    } else {
      trustMap.set(a, [b]);
    }

    if (trustMap.has(b)) {
      trustMap.set(b, trustMap.get(b).concat(a));
    } else {
      trustMap.set(b, [a]);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!trustMap.has(i)) {
      return i;
    }
  }

  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
