const obj123 = {
  note1: "jin",
  note2: "xian",
  note3: undefined,
  num: 3,
};

const array: Array<number> = [1, 2, 3];
console.log(array);

const validateObject = (object: {
  [key: string]: string | number | null | undefined;
}) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (value === undefined) {
      result[key] = null;
    }
  });
  return result;
};

let res = validateObject(obj123);
console.log(res);
