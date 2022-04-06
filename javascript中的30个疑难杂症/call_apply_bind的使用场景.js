/**
 * Function对象方法：
 * 1. apply(): 调用一个函数， 其具有一个指定的this值, 以及作为一个数组(或类数组的对象)提供的参数。
 * apply()方法， 能劫持另外一个对象的方法， 继承另外一个对象的属性。
 * Function.apply(obj, args)方法接受两个参数。
 * obj：这个对象将替代Function类的this对象；
 * args: 这个是数组， 它将作为参数传给Function。
 */

//call, applyde区别：
//call: 单个的参数传入
//apply: 以数组的形式传入
var stu1 = {
    name: "Jack",
    age: 18,
    say: function(school, grade) {
        console.log(this.name + "今年" + school + "大学" + grade + "年级");
    },
};

stu1.say("北京", "二");

var stu2 = {
    name: "Tom",
};

stu1.say.call(stu2, "清华", "四");
stu1.say.apply(stu2, ["清华", "三"]);

//应用： 类数组转换为数组
var arr = Array.prototype.slice.apply(arguements); //arguements为类数组

//bind: 类似于call, 但是与其不同的是，call方法调用可以立即执行，
//但是bind需要用一个变量接受之后才能执行
var val = stu1.say.bind(this);