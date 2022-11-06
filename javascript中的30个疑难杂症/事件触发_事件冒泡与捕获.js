/**
 * 事件的一个周期：
 * 事件捕获、事件对象的触发、事件冒泡触发
 * 事件冒泡的应用： 1，阻止冒泡 e.stopPropagation(); IE: e.cancelBubble()
 */

var obj = document.getElementById("demo");
obj.addEventListener(
    "click",
    function(e) {
        alert("div0");
    },
    false
);

var obj1 = document.getElementById("demo1");
obj1.addEventListener(
    "click",
    function(e) {
        alert("div1");
    },
    false
);

//事件委托：
var obj2 = document.getElementById("demo2");
obj2.addEventListener(
    "click",
    function(e) {
        var e = e || window.event; //IE8: window.event.argument[0]
        if (e.target.nodeName.toLowerCase() == "li") {
            // IE8: e.srcElement
            alert(e.target.innerHTML);
        }
    },
    false
);