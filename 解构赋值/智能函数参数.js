//我们可以把所有参数当作一个对象来传递，然后函数马上把这个对象解构成多个变量

//我们传递一个对象给函数
let option = {
    title: "My Menu",
    items: ["Item1", "Item2"],
};

//然后函数马上把对象展开成变量
function showMenu({
    title = "Untitled",
    width = 200,
    height = 200,
    items = [],
}) {
    console.log(title, width, height, items);
}

showMenu(option);

//我们同样可以使用带有嵌套对象和冒号映射的更加复杂的解构：
let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
};

function showMenu({
    title = "Untitled",
    width: w = 100, // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2], // items first element goes to item1, second to item2
}) {
    alert(`${title} ${w} ${h}`); // My Menu 100 200
    alert(item1); // Item1
    alert(item2); // Item2
}

showMenu(options);