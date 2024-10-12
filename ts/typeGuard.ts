//类型守卫

//1. 类型收窄 ｜ 类型收缩
//例如： typeof instanceof in 等

//2. 自定义类型守卫
//例如： isNumber isStri ng isObject isArray

const isObj = (obj: any): obj is object => {
  return {}.toString.call(obj) === "[object Object]";
};

const isString = (str: any): str is string => typeof str === "string";

const isNumber = (num: any): num is number => typeof num === "number";

const isBoolean = (bol: any): bol is boolean => typeof bol === "boolean";

const isFunction = (fn: any): fn is Function => typeof fn === "function";

const isArray = (arr: any): arr is Array<any> => Array.isArray(arr);

const fn = (data: any) => {
  if (isObj(data)) {
    let val;
    Object.keys(data).forEach((key) => {
      val = data[key];
      if (isNumber(val)) {
        data[key] = val.toFixed(2);
      } else if (isString(val)) {
        data[key] = val.trimStart();
      } else if (isFunction(val)) {
        //只能通过data[key]这种方式来调用,使用val()会使得函数脱离上下文,this会指向window
        data[key]();
      }
    });
  }
};

let obj = {
  a: 123.001,
  b: "   hello world",
  c: () => {
    console.log("c");
  },
  d: true
};
