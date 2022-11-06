/**
 * let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
  let data = {
    name: '姓名',
    age: 18
  }
  render(template, data); // 我是姓名，年龄18，性别 undefined
 */

function render(template, data) {
    let computed = template.replace(/\{\{(\w+)\}\}/g, function(match, key) {
        return data[key];
    });
    return computed;
}

let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";

let data = {
    name: "姓名",
    age: 18,
    sex: "男",
};

console.log(render(template, data));