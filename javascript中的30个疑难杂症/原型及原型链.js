/**
 * 一、前置知识：对象
 * 
 * 1. 函数对象： Function
    定义：主要通过 Function对象创造点的
      var func1 = new Function('str', 'console.log(str)')
      function func1(){}
  
  2. 普通对象：
    定义： 主要通过 Object对象创建
      var object = {
        Mooc: "Mooc",
        getNameValue: function() {
          console.log('Mooc');
        }
      } 
      var obj2 = new Object()
      
  3. 构造函数创建对象
      Person1 Person2 Person3....
      function Person() {
        this.name = name;
        this.age = age;
        this.say = function() {
          console.log('我是' + this.name)
        }
      }
      var p1 = new Person("张三"， 18);
      var p2 = new Person("李四"， 20);
 */

/**
 * 二、 原型及原型链
   方式： 1，2，3
    1： 一句话 = 万物皆对象， 万物皆空(null)
    2： 二个定义 = 原型：保存所有子对象的共有属性值和方法的父对象、
         原型链：有各级子对象的__proto__属性连续引用形成的结构
    3： 3个属性： __proto__, constructor, prototype    
 * 
    function Person(name, age) {
      this.name = name;
      this.age = age;
      this.say: function() {
        console.log("我是" + this.name);
      }
    }
    1. 当函数创建的时候就会携带上一个prototype的属性， 这个属性指向prototype对象，也就是原型对象
      Person.prototype.money = 20;
      Person.prototype.run = function() {
        console.log("跑步");
      }
      //constructor: Person.prototype 携带
      console.log(Person.prototype.constructor === Person)

      var p1 = new Person("张三"， 18);  //实例化p1.__proto__
      //p1.__proto__: js对象都会携带
      console.log(p1.money);
      p1.__proto__ === Person.prototype
    挂载在函数内部的方法， 实例化对象内部会复制够按照偶函数方法
    挂载在原型上的方法， 不会取复制
    挂载在内部和原型上的都是可以通过实例取调用的
    一般来说， 如果需要访问构造函数内部的私有变量， 我们可以定义在函数内部， 其他情况可以定义在函数原型上
    
    //总结：
    1. 所有对象都会携带 p1.__proto__属性
        p1.__proto__ === Person.prototype
    2. Person.prototype.constructor == Person

*/
