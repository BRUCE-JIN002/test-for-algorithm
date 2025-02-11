interface AA {
  age: number;
}

interface BB {
  emial: string;
}

const A: AA = {
  age: 19
};

const B: BB = {
  emial: "123456789@qq.com"
};

//1.  对象的混入 A & B
const C = { ...A, ...B };
const D = Object.assign({}, A, B);
//深拷贝  node > 18 || chorme > 90
const E = structuredClone(A);

//2. 类的混入
class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

class Html {
  render() {
    console.log("render");
  }
}

class App {
  constructor() {
    console.log("Component");
  }
}

type Constructor<T> = new (...args: any[]) => T;

function pluginMixins<T extends Constructor<App>>(base: T) {
  return class extends base {
    private logger = new Logger();
    private html = new Html();
    constructor(...args: any[]) {
      super(...args);
      this.logger = new Logger();
      this.html = new Html();
    }

    run() {
      this.logger.log("running");
    }

    render() {
      this.html.render();
    }

    log(msg: string) {
      this.logger.log(msg);
    }
  };
}

const AppMixins = pluginMixins(App);
const app = new AppMixins();

app.run();
app.render();
app.log("hello world");
