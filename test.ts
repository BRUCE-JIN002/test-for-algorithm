const obj = {
  note1: "jin",
  note2: "xian",
  note3: undefined,
  num: 3,
};

for (const [key, value] of Object.entries(obj)) {
  if (value === undefined) {
  }
}

const arr: Array<number> = [1, 2, 3];
console.log(arr);

const validateObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (value === undefined) {
      result[key] = null;
    }
  });
  return result;
};

let res = validateObject(obj);
console.log(res);
