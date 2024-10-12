interface IEventEmitter {
  events: Map<string, Function[]>;
  on: (event: string, listener: Function) => void;
  off: (event: string, listener: Function) => void;
  emit: (event: string, ...args: any[]) => void;
  once: (event: string, listener: Function) => void;
}

class EventEmitter implements IEventEmitter {
  events: Map<string, Function[]>;

  constructor() {
    this.events = new Map();
  }

  //每调一次就监听一次
  on(event: string, listener: Function) {
    if (this.events.has(event)) {
      this.events.get(event)?.push(listener);
    } else {
      this.events.set(event, [listener]);
    }
  }
  //触发事件
  emit(event: string, ...args: any[]) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(...args);
      });
    }
  }
  off(event: string, listener: Function) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.splice(callbacks.indexOf(listener), 1);
    }
  }

  //只触发一次
  once(event: string, listener: Function) {
    const onceListener = (...args: any[]) => {
      listener(...args);
      this.off(event, onceListener);
    };
    this.on(event, onceListener);
  }
}
