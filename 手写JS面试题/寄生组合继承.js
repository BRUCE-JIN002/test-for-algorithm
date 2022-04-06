//实现一个你认为不错的 js 继承方式:

function Parent(name) {
    this.name = name;
    this.say = () => {
        console.log("say:", "Hello World!");
    };
}

//父类新添加的方法
Parent.prototype.play = () => {
    console.log("play:", "你好");
};

Parent.prototype.add = () => {
    console.log("I am add");
};

function Children(name) {
    Parent.call(this); //call super constructor
    this.name = name;
    this.run = () => {
        console.log("I am runing...");
    };
}

//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__.
//返回一个新对象，带着指定的原型对象和属性
//即 Parent为 Childre的原型

//子类续承父类
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;

//用法：
let child = new Children("Jack");
console.log(child.name);
child.say();
child.play(); //继承父类的方法
child.run();
console.log(child instanceof Children);
child.add();