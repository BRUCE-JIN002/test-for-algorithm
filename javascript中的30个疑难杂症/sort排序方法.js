var arr = [1, 2, 3, 4, 5];
console.log(arr.sort()); // 1 2 3 4 5

var arr1 = [3, 25, 15, 18, "a", 9, 22];
console.log(arr1.sort()); //[ 15, 18, 22,  25, 3,  9, 'a']

/**
 * sort： 1.默认升序
 * 2. 将排序的元素转换为字符串， 找对应的unicode码，再进行排序
 *
 * 解决方法：定义一个比较器函数
 * sort(callback)
 * function(x, y) {return x - y} 小于0：x移动到 y的前面， 大于0：返之
 */

var arr2 = [3, 25, 15, 18, 9, 22];

arr2.sort((x, y) => x - y);

console.log(arr2);