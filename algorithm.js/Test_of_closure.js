const test = () => {
    let num = 0;

    const effect = () => {
        num += 1;
        const message = `现在的num的值：${num}`;
        return function unmount() {
            console.log(message);
        }
    }

    return effect; //返回才能在外界调用它
}

//执行test返回effect函数
const add = test();
//执行effect返回引用了message1的 unmount函数
const unmount = add();
//再次执行effect, 返回引用了message2的 unmount函数
add();
//message3
add();
//message4
add();
//message4
add();
unmount();