function Dog() {
    this.name = "Puppy";
}

Dog.prototype.bark = () => {
    console.log("woof!woof!");
};

const dog = new Dog();
//会报错：因为普通对象实例是没有prototype这个属性的，也就是说普通对象的prototype属性的值是undefined
// dog.bark();   //Cannot read property 'bark' of undefined

/**
 * 给实例指定原型
 */
var a = { name: "dog" };
var b = { age: 15 };

//方法 1：
a.__proto__ = b;
console.log(a.age === 15);
console.log(a.age);

//方法 2：
var c = { name: "Jack" };
var d = { age: 23 };

Object.setPrototypeOf(c, d); //指定 c 的原型为 d, c -> d
console.log(c.age, d.age); // 23 23
console.log(c.name); //Jack
console.log(d.name); //undefined

/**
 * 题目二：
 * 一个页面的脚本如下，请问会打印出什么内容？为什么？
 */

function Cat() {
    this.name = "Mimi";
}

Cat.prototype.bark = () => {
    console.log("miaow~");
};

const cat = new Cat();
console.log(
    Cat.prototype.constructor === Cat &&
    cat.constructor === Cat &&
    cat instanceof Cat
); //true

/**
 * 解释：
 * 因为 constructor是 prototype上的属性，
 * 所以dog.constructor实际上就是指向Dog.prototype.constructor；
 * constructor属性指向构造函数。
 * instanceof而实际检测的是类型是否在实例的原型链上。
 * constructor是prototype上的属性，这一点很容易被忽略掉。
 * constructor和instanceof 的作用是不同的，
 * 感性地来说，constructor的限制比较严格，它只能严格对比对象的构造函数是不是指定的值；
 * 而instanceof比较松散，只要检测的类型在原型链上，就会返回true。
 */

/**
 * 题目三：
 * 一个页面的脚本如下，请问会打印出什么内容？
 */

function Dog1() {
    this.name = "Puppy";
}

Dog1.prototype.bark = () => {
    console.log("Woof!Woof!");
};

function BigDog() {}

BigDog.prototype = new Dog();

const bigDog = new BigDog();
console.log(bigDog.constructor === BigDog); //false

for (let i in bigDog) {
    console.log(i);
}

/**
 *解释：
  因为bigDog的原型是Dog的实例，
  所以访问bigDog.constructor时实际访问的是 Dog.prototype.constructor，也就是Dog。
  所以 bigDog.constructor === Dog，这样才会打印出true。
*/

//修改：
/**
 * 段代码通过显式地更改 BigDog.prototype的指向来修正上面提到的隐患,
 * 是因为我们不希望 constructor 这个属性被 for…in 遍历到，所以用 defineProperty 来控制访问权限。
 */

function Dog2() {
    this.name = "puppy";
}

Dog2.prototype.run = () => {
    console.log("gogo!");
};

function BigDog2() {}

BigDog2.prototype = new Dog2();

Object.defineProperty(BigDog.prototype, "constructor", {
    value: BigDog2,
    enumerable: false,
});

const bigDog2 = new BigDog2();
console.log(bigDog.constructor === BigDog2);

for (let i in bigDog2) {
    console.log(i);
}

//
class Mouse {
    constructor(props) {
        this.name = "Jerry";
    }
}

class BigMouse extends Mouse {
    constructor(props) {
        super(props);
    }
}

const bigMouse = new BigMouse();

console.log(bigMouse.constructor === BigMouse); //true
for (let i in bigMouse) {
    console.log(i); // 不会出现constructor属性
}