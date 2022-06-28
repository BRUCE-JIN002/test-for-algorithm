/** * Object.defineProperty(obj, prop, descriptor)
 * obj: 需要定义属性的对象
 * prop: 需要定义的属性
 * descriptor: 属性的描述符
 * 返回值: 返回此对象
 */

var obj = {};
var descriptor = {
	//数据描述符
	//表示该属性能否通过delete删除， 能否修改属性的特性或者能否修改访问器属性，默认为false,
	//当且仅当为true时，才能实现上述行为。
	configurable: false,
	//是否可写, 默认为false, 仅当为true时，其值才能被复制运算符改变
	writable: false,
	//是否可枚举， 即通过for..in访问属性， 默认为false
	enumerable: false,
	//表示该属性值，可以使任何的有效值， 默认为 undefined
	value: "Hello World!",

	/**
	 * 仅当 writable === true 时才可执行以下操作
	 *  get: () => this.value, //读取属性时候调用的函数， 默认值为undefined
	 *  set: (newValue) => (this.value = newValue), //读取属性时候调用的函数， 默认值为undefined
	 */
};

// Object.defineProperty(obj, prop, descriptor)

Object.defineProperty(obj, "Mooc", descriptor);
console.log(obj.Mooc);

//示例：
function defineReactiveProperty(obj, key, val) {
	Object.defineProperty(obj, key, {
		get() {
			console.log("get", key);
			return val;
		},
		set(newValue) {
			if (newValue) {
				console.log("set", key);
				val = newValue;
			}
		},
	});
}
const obj1 = {};
defineReactiveProperty(obj1, "foo", "123");
obj1.foo; //触发get函数
obj1.foo = "345"; //触发set函数，此时 newValue = 345，而 val 由于闭包还是 123
console.log(obj1);
