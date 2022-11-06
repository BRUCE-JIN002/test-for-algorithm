/**
 *
 * <input type='button' value='html事件点击' onclick="fuc()">
 * <input type='button' value='dom0级事件点击' id="btn">
 * <input type='button' value='dom2级事件点击' id="btn1">
 *
 * <script>
 * function fun() {
 *    alert("hell Mooc");
 *  }
 * </script>
 */

//DOM0级事件绑定：
document.getElementById("div").onclick = function () {
	alert("hello Mooc");
};

//DOM2级事件：事件监听
/**
 * element.addEventListener(event, function, useCapture) removeEventListener
 * event: 事件名(必须)，支持所有DOM事件。
 * function: 监听函数， 指定时间触发时执行的函数。
 * useCapture: (可选) , 指定时间是否在捕获或冒泡阶段执行， true:捕获， false: 冒泡， 默认false
 * IE8: element.attachEvent(event, function);
 * event: (必须) 事件类型， 需加上 on,如： onclick.
 * function: (必须) 指定事件触发时执行的函数。
 */

document.getElementById("btn1").addEventListener("click", func2);

function func2() {
	alert("Hello Mooc");
}

// 事件监听的优点： 可以绑定多个事件； 常规的事件绑定只能执行官最后绑定的一个事件，
// 原因： js不支持事件重载， 绑定事件相当于一个变量存储的时函数的地址，
// 如果在绑定H一个事件， 相当于变量指向了拎一个函数地址； 事件监听相当于订阅发布者，
// 改变了数据， 出发了事件， 订阅这个事件的函数被执行
