var findWords = function(words) {
    const list = [];
    const rowIdx = "12210111011122000010020202"; //26个字母按行编号0,1,2
    for (const word of words) {
        //遍历每个单词
        let isValid = true;
        //先判断第一个字母的行号
        const idx = rowIdx[word[0].toLowerCase().charCodeAt() - "a".charCodeAt()];
        for (let i = 0; i < word.length; i++) {
            //后面有一个字母的行号与首字母行号不符合即停止
            if (
                rowIdx[word[i].toLowerCase().charCodeAt() - "a".charCodeAt()] !== idx
            ) {
                isValid = false;
                break;
            }
        }
        //行号全部符合加入结果数组
        if (isValid) {
            list.push(word);
        }
    }
    return list;
};

//for...of的使用
//for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）
//上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
let nums = [1, 2, 4, 5, 6];
let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);

for (const e of map) {
    console.log(e);
}

function* foo() {
    yield 1;
    yield 2;
    yield 3;
}

for (let o of foo()) {
    console.log(o);
    break; // closes iterator, triggers return
}