/**
 * 如果一个对象或数组嵌套了其他的对象和数组，我
 * 们可以在等号左侧使用更复杂的模式（pattern）来提取更深层的数据。
 * 在下面的代码中，options 的属性 size 是另一个对象，属性 items 是另一个数组。
 * 赋值语句中等号左侧的模式（pattern）具有相同的结构以从中提取值。
 */

let option = {
    size: {
        width: 100,
        height: 100,
    },
    items: ["Cake", "Moon"],
    extra: true,
};

// 为了清晰起见，解构赋值语句被写成多行的形式
let {
    size: {
        // 把 size 赋值到这里
        width,
        height,
    },
    items: [item1, item2],
    title = "Menu", //在对象中不存在 title（使用默认值）
} = option;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
console.log(title);

/**
 * 最终，我们得到了 width、height、item1、item2 和具有默认值的 title 变量。
 * 注意，size 和 items 没有对应的变量，因为我们取的是它们的内容。
 */

//对象解构

const school = {
    classes: {
        stu: {
            name: "Bob",
            age: 24,
        },
    },
};

//深度嵌套的对象解构
const {
    classes: {
        stu: { name: name1 },
    },
} = school;
console.log(name1);