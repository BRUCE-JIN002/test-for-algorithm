const uniqObjArr = (arr: any[], field: string | number) =>
  arr.reduce((acc, cur) => {
    if (!acc.find((item: any) => item[field] === cur[field])) {
      acc.push(cur);
    }
    return acc;
  }, []);

const arr = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 1, name: "c" },
  { id: 3, name: "d" },
];

console.log(uniqObjArr(arr, "id"));
