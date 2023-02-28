function makerUser() {
  return {
    name: "Jhon",
    ref: this,
  };
}

let user = makerUser();

console.log(user);
console.log(user.ref);
console.log(user.ref.name); //undefined

function makerUser1() {
  return this;
}
console.log(makerUser1().name); //undefined

function makerUser2() {
  return {
    name: "Jhon",
    ref() {
      return this;
    },
  };
}

let user2 = makerUser2();

console.log(user2.ref().name); //Jhon

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

console.log(typeof ladder); //object
console.log(ladder.up().up().showStep());

function User(name) {
  // this = {};  隐式创建一个新的对象；
  //添加属性到 this
  this.name = name;
  this.isAdmin = false;
  this.upper = function (a = 1) {
    console.log(this.name, a);
  };
  console.log("i am here", new.target); //new.target在函数内部用于判断是否是使用new 调用了构造函数
}

let newUser = new User("jin");
console.log(newUser); //User { name: 'jin', Admin: false }
console.log(newUser.name); //jin
console.log(newUser.upper()); //jin 1

let saler = new (function () {
  console.log("i am here", new.target); //new.target在函数内部用于判断是否是使用new 调用了构造函数
  (this.name = "Adam"), (this.isAdmin = false);
})();
console.log(saler); //{ name: 'Adam', isAdmin: false }

function User3(name) {
  if (!new.target) {
    return new User3(name);
  }
  this.name = name;
}

let jhon = User3("Jhon");
console.log(jhon); //User3 { name: 'Jhon' }

//是否可以创建像 new A() == new B() 这样的函数 A 和 B？ 答案是: yes
let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() === new B()); //true

function Accumulator(startingValue) {
  this.value = startingValue; //初始值

  this.read = function () {
    this.value += +prompt("How much to add?", 0); //0位提示框的初始值，"How much to add?"为提示语
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
