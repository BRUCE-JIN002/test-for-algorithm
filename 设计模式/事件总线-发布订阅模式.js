class EventEmitter {
  constructor() {
    //handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {};
  }

  //on方法用于安装监听器，它接受目标事件名和回调函数作为参数
  on(eventName, cb) {
    //先检查下目标事件名有没有对应的舰艇函数队列
    if (!this.handlers[eventName]) {
      //如果没有，那么先初始化一个监听函数队列
      this.handlers[eventName] = [];
    }

    //把回调函数推入目标事件的监听函数队列里面去
    this.handlers[eventName].push(cb);
  }

  //emit方法用于触发目标事件， 它接受å事件名和监听函数入参作为参数
  emit(eventName, ...args) {
    //检查目标事件是否有监听函数队列
    if (this.handlers[eventName]) {
      //这里对this.handlers[eventName] 做一次前拷贝，主要目的是为了避免通过once安装监的听器在移除过程中出现顺序问题
      const handlers = this.handlers.slice();
      //如果有，则逐个调用队列里的回调函数
      handlers.forEach((callback) => {
        callback(...args);
      });
    }
  }

  //移除某个事件回调队列里的制定回调函数
  off(eventName, cb) {
    const callbacks = this.handlers[eventName];
    const index = callbacks.indexOf(cb);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  }

  //为事件注册单次监听器
  once(eventName, cb) {
    //对回调函数进行包装， 使其执行完毕后自动被移除
    const wrapper = (...args) => {
      cb(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}
