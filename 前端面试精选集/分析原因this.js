//在浏览器中运行以下脚本，点击页面后，会打印出 false。请问为什么会打印出 false？
function Button() {
    this.clicked = false;
    this.click = function() {
        this.clicked = true;
        console.log(button.clicked, "clicked");
    };
}
const button = new Button();
document.addEventListener("click", button.click);
/**
 * 因为addEventListener的回调函数的函数上下文为触发事件的元素的引用。
 * 所以 click 事件发生时，button.click回调函数被调用时里面的this指向了document元素。
 * 所以document.clicked被设置为true，而button.clicked则没有变化，依然为false。
 * */

//更改函数使得其打印出 'true clicked'
//只需改变 this.click为箭头函数
function Button1() {
    this.clicked = false;
    this.click = () => {
        this.clicked = true;
        console.log(button.clicked, "clicked");
    };
}
const button1 = new Button();
document.addEventListener("click", button.click);

//或者使用 bind 方法显式指明 this 指向
function Button2() {
    this.clicked = false;
    this.click = function() {
        this.clicked = true;
        console.log(button.clicked, "clicked");
    };
}
const button2 = new Button();
document.addEventListener("click", button.click.bind(button));

//总结：
/**
 * 因为箭头函数没有自己的this值，在箭头函数中的this指向箭头函数被定义时this的值。
 * 在答案中的第一段代码中箭头函数的this指向了本构造函数，这正是我们想要的。
 * 箭头函数独特的this指向是它最重要的一个特点，也是很容易在ES6相关内容中被考察到的点。
 *
 * 至于 Function.prototype.bind方法，不同于 call和 apply方法动态地在函数运行时改变其this指向，
 * bind方法会指定this的指向，然后创建一个新绑定函数。
 *
 * bind和call & apply方法最重要的区别是：bind方法允许你创建一个新的方法，然后稍后再执行它；
 * 而后者被调用时函数就必须执行
 *
 * 这道题目考察了函数被当做对象方法调用时this关键字指向的问题，以及候选人是否熟悉修复this指向的方法。
 * 箭头函数和bind方法是最实用的修复this指向的方法，在面试中这两个方法最好都要提到
 */