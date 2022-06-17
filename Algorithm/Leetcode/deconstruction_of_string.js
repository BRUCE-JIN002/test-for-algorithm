//URL地址的解构：
//window.location.href: 用于取得当前窗口的URL
const url = "'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&rsv_idx=2&rsv_dl=fyb_n_homepage&sa=fyb_n_homepage&hisfilter=1&wd=%E4%B8%AD%E5%A4%AE%E4%B8%80%E5%8F%B7%E6%96%87%E4%BB%B6%E8%A6%81%E7%82%B9%E9%80%9F%E8%AF%BB"

let ind = url.indexOf('?');
//返回从"？"以后截取的字符串，以‘&’为分割的一个数组arr
let arr = url.slice(ind + 1).split('&');

//let arr = newUrl.split('&'); //返回字符串

const map1 = arr.map(x => {
    let newArr = x.split('='); //返回每一项以'='分割后的数组
    return {
        [newArr[0]]: newArr[1]
    } //将数组newArr转换为对象保存在map1数组中
})


//将map1中的对象整合成一个新的对象
let targetObj = {};
map1.forEach((paramsItem) => {
    targetObj = {...targetObj, ...paramsItem }
})

console.log(ind);
// console.log(newUrl);
console.log(arr);
console.log(map1);
console.log(targetObj);