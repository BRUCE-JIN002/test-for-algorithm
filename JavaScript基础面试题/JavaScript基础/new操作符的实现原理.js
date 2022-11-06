//new 操作符的执行过程
//1. 首先创建一份新的对象
//2. 设置原型， 将对象的原型设置为 prototype 对象
//3. 让函数的 this指针指向这个对象， 执行构造函数代码(为这个新对象添加属性)
//4. 判断函数的反回类型， 如果是值类型，则返回创建的对象，如果是引用类型， 就返回这个引用类型的对象。

//具体实现：
function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    //判断参数是否是一个函数
    if (typeof constructor !== "function") {
        console.log("type error");
        return;
    }
    //新建一个空对象，对象的原型为构造函数的 prototype对象
    newObject = Object.create(constructor.prototype);
    //将 this指向新建对象，并执行构造函数的代码(为这个新对象添加属性)
    result = constructor.apply(newObject, arguments);
    //判断返回对象
    let flag =
        result && (typeof result === "object" || typeof result === "function");
    //判断返回对象
    return flag ? result : newObject;
}

//使用方法：
objectFactory("构造函数", "初始化参数");