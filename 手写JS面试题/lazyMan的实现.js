/**
** 实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

** LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待 10秒..
Wake up after 10
Eat dinner~

** LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

** LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待 5秒
Wake up after 5
Hi This is Hank!
Eat supper
*/

class _LazyMan {
    constructor(name) {
            this.tasks = [];
            const task = () => {
                console.log(`Hi, this is ${name}`);
                this.next();
            };
            this.tasks.push(task); //将task任务加入队列
            setTimeout(() => {
                //把this.next()放到调用栈清空之后执行
                this.next();
            }, 0);
        }
        //取下一个任务
    next() {
            const task = this.tasks.shift(); //取第一个任务
            task && task(); //任务不为空且任务可执行
        }
        //睡觉
    sleep(time) {
            this._sleepWrapper(time, false);
            return this; //链式调用
        }
        //第一次睡觉
    sleepFirst(time) {
            this._sleepWrapper(time, true);
            return this;
        }
        //睡觉安排
    _sleepWrapper(time, first) {
            const task = () => {
                setTimeout(() => {
                    console.log(`Wake up after ${time}`);
                    this.next();
                }, time * 1000);
            };
            if (first) {
                this.tasks.unshift(task); //先睡觉为真的话，将睡觉任务放到任务队列头部
            } else {
                this.tasks.push(task); //不是首次睡觉， 把放到任务队列尾部
            }
        }
        //吃饭
    eat(name) {
        const task = () => {
            console.log(`Eat ${name}`);
            this.next();
        };
        this.tasks.push(task);
        return this;
    }
}

function LazyMan(name) {
    return new _LazyMan(name);
}

LazyMan("Hank").eat("supper").sleepFirst(5);
LazyMan("Hank").sleep(10).eat("dinner");