// function init() {
//     var name = "Mozilla";

//     function displayName() {
//         console.log(name);
//     }
//     displayName(); //调用函数displayName
// }
// init();


// function makeFun() {
//     var name = "Mozilla";

//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// var myFun = makeFun(); //执行makeFun时创建的displayName函数实例的引用
// myFun();

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12