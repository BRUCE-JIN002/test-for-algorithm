interface Example {
  name?: string;
  age: number;
  address: string;
  sex: "male" | "female";
  isAdmin: boolean;
}

type Example1 = Omit<Example, "name" | "sex">;

const obj1: Example1 = {
  age: 20,
  address: "BeijingZhonguangcun",
  isAdmin: false,
};

type Example2 = Pick<Example, "age" | "name">;

const obj2: Example2 = {
  name: "Jack",
  age: 18,
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
  isAdmin: true,
};

type Example5 = Record<"address" | "sex", string>;

type Example6 = Record<keyof Example, string>;

const obj5: Partial<Example6> = {
  name: "",
  age: "",
  address: "",
  isAdmin: "",
};

interface Name {
  name: string;
  age: number;
}

const Name: Name = {
  name: "string",
  age: 12,
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
