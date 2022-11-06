var url = "https://www/baidu.com?key=hello&name=张三&num=123";
// escape() unescape() ASCII码的编解码方式， 已废弃
var es = escape(url);
console.log(es); //https%3A//www/baidu.com%3Fkey%3Dhello%26name%3D%u5F20%u4E09%26num%3D123
console.log(unescape(es)); //https://www/baidu.com?key=hello&name=张三&num=123

//encodeURI() decodeURI()
console.log(encodeURI(url)); //https://www/baidu.com?key=hello&name=%E5%BC%A0%E4%B8%89&num=123
let es1 = encodeURI(url);
console.log(decodeURI(es1)); //https://www/baidu.com?key=hello&name=张三&num=123

//encodeURIComponent() decodeURIComponent()
console.log(encodeURIComponent(url)); //https%3A%2F%2Fwww%2Fbaidu.com%3Fkey%3Dhello%26name%3D%E5%BC%A0%E4%B8%89%26num%3D123
let es2 = encodeURIComponent(url);
console.log(decodeURIComponent(es2)); //https://www/baidu.com?key=hello&name=张三&num=123
