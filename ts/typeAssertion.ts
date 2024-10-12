interface A {
  run: string;
}

interface B {
  build: string;
}

const fn = (type: A | B) => {
  console.log((<A>type).run);
};
