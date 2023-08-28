const truthCheck = (collection, pre) => {
  let result = true;
  collection.forEach((item) => {
    if (!item[pre] === true) {
      result = false;
    }
  });
  return result;
};

const res = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);

console.log(res);
