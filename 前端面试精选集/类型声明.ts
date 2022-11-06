/**
 * 如下是一段 TypeScript 代码，有一个类型为 Person 的变量person，
 * 另外有一个名为setPerson的函数用来给person变量设置键值。
 */
type Person = {
  name: string;
  gender: "male" | " female";
  age: number;
};

const person: Person = {
  name: "Jack",
  gender: "male",
  age: 22,
};

function setPerson(prop, value) {
  person[prop] = value;
}

//请给setPerson写一个类型声明，使得其第一个参数限制为 Person 类型的键，
//第二个参数限制为第一个参数对应值的类型，如:
//setPerson('address', 'flinders') // Argument of type '"address"' is not assignable to parameter of type '"name" | "gender" | "age"'.
// setPerson('age', '18') // Argument of type '"18"' is not assignable to parameter of type 'number'.
type SetPerson = <k extends keyof Person>(prop: k, value: Person[k]) => void;

const setPerson1: SetPerson = (prop, value) => {
  person[prop] = value;
};
