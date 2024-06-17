const obj123 = {
  note1: "jin",
  note2: "xian",
  note3: undefined,
  num: 3,
};

const validateObject = (object: Record<string, any>) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (value === undefined) {
      result[key] = null;
    }
  });
  return result;
};

const result = validateObject(obj123);
console.log(result);

type LL = Array<keyof typeof obj123>;

const a: LL = ["note1"];
