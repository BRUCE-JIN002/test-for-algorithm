function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function(v) {
        this.vertices.push(v);
    },
};

var g = new Graph();
// g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
// 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。

console.log(g.hasOwnProperty("nope")); //false  //不存在此属性
console.log(g.hasOwnProperty("addVertex")); //false, 不是自己的属性，而是原型链上的
console.log(g.hasOwnProperty("edges")); //true, 继承自Graph
console.log(g.hasOwnProperty("vertices")); //true， 继承自Graph

//Object.create()方法创建对象拓展原型链
function foo() {}
foo.prototype = {
    foo_prop: "foo val",
};

function bar() {}
var proto = Object.create(foo.prototype);

//给 proto添加属性 bar_prop
proto.bar_prop = "bar val";
//bar -> proto
bar.prototype = proto;

var inst = new bar();

console.log(inst.foo_prop);
console.log(inst.bar_prop);