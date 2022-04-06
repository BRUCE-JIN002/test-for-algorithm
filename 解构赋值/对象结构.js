//对象结构的基本语法： let {var1, var2} = {var1:…, var2:…}
/**
 *在等号右侧应该有一个已经存在的对象，我们想把它拆分到变量中。
 等号左侧包含了对象相应属性的一个类对象“模式（pattern）”。
 在最简单的情况下，等号左侧的就是 {...} 中的变量名列表。
 */

let options = {
    title: "Menu",
    width: 100,
    height: 100,
};

let { title, width, height } = options;
console.log(title);
console.log(width);
console.log(height);

//变量的顺序并不重要，下面这个代码也奏效
let { height1, width1, title1 } = { title1: "Menu", height1: 200, width1: 100 };
console.log(title1);
console.log(width1);
console.log(height1);

//如果我们想把一个属性赋值给另一个名字的变量，比如把 options.width 属性赋值给名为 w 的变量，
//那么我们可以使用冒号来设置变量名称
let option1 = {
    title: "Span",
    width: 100,
    height: 100,
};

let { width: w, height: h, title: t } = option1;
console.log(w);
console.log(h);
console.log(t);

//冒号表示“什么值：赋值给谁”。
//上面的例子中，属性 width 被赋值给了 w，
//属性 height 被赋值给了 h，属性 title 被赋值给了同名变量。
//就像数组或函数参数一样，默认值可以是任意表达式甚至可以是函数调用。
//它们只会在未提供对应的值时才会被计算/调用。
let opt = {
    title2: "Select",
};

//对于可能缺失的属性，我们可以使用 "=" 设置默认值，如下所示:

let { width2 = 300, height2 = 300, title2 } = opt;
console.log(width2); //300
console.log(height2); //200
console.log(title2); //Select

//我们还可以将冒号和等号结合起来
let options3 = {
    title3: "Menu",
};

let { width: w1 = 100, height: h1 = 200, title3 } = options3;

console.log(w1); // 100
console.log(h1); // 200
console.log(title3); // Menu

//如果我们有一个具有很多属性的复杂对象，那么我们可以只提取所需的内容：
let options1 = {
    title: "Button",
    width: 100,
    height: 100,
};

let { title: t1 } = options1;
console.log(t1);

/**
 * 如果对象拥有的属性数量比我们提供的变量数量还多，该怎么办？
 * 我们可以只取其中的某一些属性，然后把“剩余的”赋值到其他地方吗？
 * 我们可以使用剩余模式（pattern），就像我们对数组那样。
 * 一些较旧的浏览器不支持此功能（例如，使用 Babel 对其进行填充），但可以在现代浏览器中使用。
 * 看起来就像这样：
 */
let options5 = {
    title5: "Menu",
    height5: 500,
    width5: 500,
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象

let { title5, ...rest } = options5;
console.log(title5);
console.log(rest.height5);