/**
 * this用法：
 * 1.指代当前调用的这个对象： 4中绑定规则分别是： 默认绑定、隐式绑定、显示绑定、 new绑定。优先级从低到高。
 */

var man = {
    name: "Jack",
    age: 30,
    getName: function() {
        console.log(this.name);
    },
    getAge: function() {
        // var self = this; //保留当前作用域的 this指针

        function aa() {
            //aa() 为局部函数，局部函数 this指向 window, 将 this换为 self的话，就输出当前的 this
            console.log(this + " " + this.age); //undefined
        }
        aa(); //window.aa()
        console.log(this + " " + this.age); //30
    },
};

man.getName(); //谁调用就指向谁, this->man  //Jack
man.getAge();

//改变 this指向
//call, apply, bind
var name = "Tom";
var obj = {
    name: "Jack",
    getName: function() {
        console.log(this.name);
    },
};

obj.getName(); //Jack
var fn = obj.getName; //已经改变了 this指向到 window
fn(); //Tom (window)

//把 this的指向绑定给 obj
var fn1 = obj.getName.bind(obj);
fn1(); //Jack

//手写一个bind方法：
Function.prototype.newBind = function(obj) {
    var self = this;
    return function() {
        self.apply(obj);
    };
};

//案例验证：
var name = "Tom";
var o = {
    name: "Jack",
    get: function() {
        console.log(this.name);
    },
};

var f = o.get.newBind(o);
f();