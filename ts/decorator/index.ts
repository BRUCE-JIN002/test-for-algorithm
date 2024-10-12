import axios from "axios";
import "reflect-metadata";

//1. 类装饰器, targe是构造函数, 装饰器工厂（原理：函数柯里化）
const Base = (params: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.base = "base";
    target.prototype.params = params;
    target.prototype.getBase = function () {
      return this.base;
    };
  };
  return fn;
};

// 2. 方法装饰器
const Get = (url: string) => {
  const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
    const curTarget = Reflect.getMetadata("key", target);
    axios.get(url).then((res) => {
      descriptor.value(curTarget ? res.data[curTarget] : res.data);
    });
  };
  return fn;
};

// 3. 参数装饰器
const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    console.log(target, key, index);
    Reflect.defineMetadata("key", "result", target);
  };
  return fn;
};

//4. 属性装饰器
const Name = () => {
  const fn: PropertyDecorator = (target, key) => {
    console.log(target, key);
  };
  return fn;
};

@Base("Hello")
class Http {
  @Name()
  name: string;
  constructor() {
    this.name = "属性装饰器";
  }

  @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
  getList(@Result() data: any) {
    // console.log(data);
  }

  crate() {}
}

const http = new Http() as any;
