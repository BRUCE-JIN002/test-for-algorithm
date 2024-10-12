interface Example {
  name?: string;
  age: number;
  address: string;
  sex: "male" | "female";
  isAdmin: boolean;
}

//Omit工具
type Example1 = Omit<Example, "name" | "sex">;

const obj1: Example1 = {
  age: 20,
  address: "BeijingZhonguangcun",
  isAdmin: false
};

//Pick工具
type Example2 = Pick<Example, "age" | "name">;

const obj2: Example2 = {
  name: "Jack",
  age: 18
};

interface Example4 extends Example {
  score: number;
}

const obj3: Example4 = {
  score: 90,
  name: "Jim",
  age: 21,
  address: "China",
  sex: "male",
  isAdmin: true
};

//Record工具
type Example5 = Record<"address" | "sex", { name: string; age?: number }>;

type Example6 = Record<keyof Example, string>;

const obj5: Partial<Example6> = {
  name: "",
  age: "",
  address: "",
  isAdmin: ""
};

interface Name {
  name: string;
  age: number;
}

const Name: Name = {
  name: "string",
  age: 12
};

//提取数组里面元素的类型
type Point = { x: number; y: number };
type Data = Point[];

type PointDetail = Data[number];

// keyof 取interface的健
interface Point1 {
  x: number;
  y: number;
}

type PointKeys = keyof Point1;

//索引签名
interface NumberOrString {
  [key: string]: string | number | boolean;
  length: number;
  name: string;
  height: boolean;
}

//只读元组类型
const point = [3, 4] as const;

point.map((item, index) => console.log(item, index));

let err = undefined;

if (err) {
  console.log("err=undefined");
} else {
  console.log("Hi");
}

const colors = ["red", "yellow", "blue", "green"] as const;
type Color1 = (typeof colors)[number];

const values = ["1", "2", "3", "4"] as const;
type Value = (typeof values)[never];

//对象key的类型
type Objkey = keyof any;

//实现返回值类型
type CustomReturnType<F extends Function> = F extends (
  ...args: any[]
) => infer Res
  ? Res
  : never;

//提供字面量联合类型的提示，又支持任意的字符串类型, string & {} 这个类型等价于 string 类型
type SmartLiteral<T extends keyof any> = T | (string & {});
type PresetSize = "mini" | "middle" | "large";
type Size = SmartLiteral<PresetSize>;

let size1: Size = "mini";
let size2: Size = "200px";
let size3: Size = "middle";

//satisfies 关键字引入于 TypeScript 4.9 版本，
//用于实现「使用类型约束值，但仍然使用值本身推导的类型」的效果。
type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];

type Palette = Record<Colors, string | RGB>;

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255]
} satisfies Palette;

// string
palette.green.startsWith("#"); // √
// [number, number, number]
palette.red.find(() => true); // √
// [number, number, number];
palette.blue.entries(); // √

//模板字符串类型的排列组合
type Software = "WeChat" | "AliPay" | "LOLM";
type Platform = "Android" | "iOS" | "HarmonyOS";
type VersionTag = "debug" | "stable" | "nightly";

//例1
type Products = `${Software}-${Platform}-${VersionTag}`;

//例2
interface User {
  name: string;
  age: number;
  job: string;
}

type UpdatedUser = {
  [K in keyof User as `updated${Capitalize<K>}`]: User[K];
};

//公式
type DerivedStruct<Struct extends object> = {
  [K in keyof Struct as `updated${Capitalize<K & string>}`]: Struct[K];
};

type UpdatedUser2 = DerivedStruct<User>;

//如果接口中只有一部分属性需要进行处理，应该怎么办？
interface UserDetail {}
interface UserRelation {}
interface UserLevel {}

interface User extends UserDetail, UserRelation, UserLevel {}

interface UpdatedUser3
  extends DerivedStruct<UserDetail>,
    UserRelation,
    UserLevel {}

//提取类型
type ArrayElementType<T extends any[]> = T extends (infer U)[] ? U : never;

type UserList = Array<{
  id: number;
  name: string;
  age: number;
}>;

// {
//   id: number;
//   name: string;
//   age: number;
// }
type User4 = ArrayElementType<UserList>;

//提取 Promise 的值类型
type QueryUserResponse = Promise<{
  id: string;
  name: string;
  email: string;
}>;

// {
//   id: string;
//   name: string;
//   email: string;
// }
type User5 = Awaited<QueryUserResponse>;

//提取入参类型与返回值类型
interface User {}

interface UpdatedUser3 extends User {}

// 仅导出了函数
export function updateUser(input: User): UpdatedUser {
  return {} as UpdatedUser;
}

// User
type InputUser = Parameters<typeof updateUser>[0];

// UpdatedUser
type OutputUser = ReturnType<typeof updateUser>;
