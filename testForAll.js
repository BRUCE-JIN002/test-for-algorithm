const obj = {
  note1: "jin",
  note2: "xian",
  note3: "xinag",
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`key: ${key}  value: ${value}`);
}
