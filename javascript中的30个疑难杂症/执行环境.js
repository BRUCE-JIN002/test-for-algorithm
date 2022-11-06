/**
 * 浏览器环境栈： Js是单线程执行
 * 执行环境(执行上下文)： EC: execution context
 * 全局执行环境， 局部执行环境
 * 变量对象： VO(Variable object) 一般是全局环境下保存变量的对象
 * 活动变量： AO(Activation object) 函数的执行环境是在调用时创建的， 该对象将代替VO对象来保存当前函数
 * 环境中的变量，参数，函数，所以在函数执行环境中VO就是AO
 */

//面试题
var buttons = [{ name: "b1" }, { name: "b2" }, { name: "b2" }];

function bind() {
    for (var i = 0; i < buttons.length; i++) {
        //换成let 就是0, 1, 2
        buttons[i].fun = function() {
            alert(i);
        };
    }
}

bind();
buttons[0].fun(); //3
buttons[1].fun(); //3
buttons[2].fun(); //3