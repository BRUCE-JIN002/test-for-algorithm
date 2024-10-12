class Publisher {
  constructor() {
    this.observers = [];
    console.log("Publisher created!");
  }

  //添加订阅者
  add(observer) {
    this.observers.push(observer);
    console.log("Pulisher.add invoked");
  }

  //移除订阅者
  remove(observer) {
    const index = this.observers.findIndex((item) => item === observer);
    this.observers.splice(index, 1);
    console.log("Pulisher.remove invoked");
  }

  //通知所有订阅者
  notify() {
    console.log("Pulisher.notify invoked");
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

//订阅者基类
class Observer {
  constructor() {
    console.log("Observer created!");
  }

  update() {
    console.log("Observer.update invoked!");
  }
}

//产品文档发发布类
class PrdPublisher extends Publisher {
  constructor() {
    super();
    //初始化需求文档
    this.prdState = null;
    //初始化订阅者
    this.observers = [];
  }

  //获取当前的prdState
  getState() {
    return this.prdState;
  }

  //改变prdState的状态值
  setPrdState(state) {
    //prdState的值发生改变
    this.prdState = state;
    //文档变更，立即通知所有订阅者
    this.notify();
  }
}

//开发者订阅类
class DeveloperObserver extends Observer {
  constructor() {
    super();
    //需求文档一开始不存在，设置为空对象
    this.prdState = {};
  }

  //重写一个具体的update方法
  update(publisher) {
    //更新呢需求文档
    this.prdState = publisher.getState();

    //调用工作函数
    this.work();
  }

  work() {
    //获取需求文档
    const prd = this.prdState;
    //开始基于需求文档搬砖。。。。
    //。。。。
  }
}

// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver();

// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const A = new DeveloperObserver();

// 创建订阅者：测试同学小B
const B = new DeveloperObserver();

// 韩梅梅出现了
const hanMeiMei = new PrdPublisher();

// 需求文档出现了
const prd = {
  // 具体的需求内容
  // ...
};
// 韩梅梅开始拉群
hanMeiMei.add(liLei);
hanMeiMei.add(A);
hanMeiMei.add(B);
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd);
