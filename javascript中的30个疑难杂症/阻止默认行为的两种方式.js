/**
 * 1. e.preventDefault()
 * 2. return false;
 */

/**
 * <a href="https://www.baidu.com">百度</a>
 * <form action="https://www.baidu.com">
 *  <input type="submit" value="提交"  name="sub" id="submit/>
 * </form>
 */

//让连接不跳转或按钮不提交
var a = document.querySelector("a");
var input = document.getElementById("submit");
a.onclick = function(e) {
    e.preventDefault();
    //低版本浏览器：e.returnValue;
    //return false也可以阻止默认行为， 但是后面的代码不在执行， 而且只限于传统的事件注册方式
    //return false
};