interface IObjProps {
  note1: string;
  note2: string;
  note3: string;
  num: number;
}

const obj: IObjProps = {
  note1: "jin",
  note2: "xian",
  note3: "xinag",
  num: 3,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`key: ${key}  value: ${value}`);
}

const arr: Array<number> = [1, 2, 3];
console.log(arr);
