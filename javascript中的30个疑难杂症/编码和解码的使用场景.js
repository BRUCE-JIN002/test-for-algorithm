var url = "https://www/baidu.com?key=hello&name=张三&num=123";
// escape() unescape() ASCII码的编解码方式， 已废弃
var es = escape(url);
console.log(es);
console.log(unescape(es));

//encodeURI() decodeURI()
console.log(encodeURI(url)); //https://www/baidu.com?key=hello&name=%E5%BC%A0%E4%B8%89&num=123
let es1 = encodeURI(url);
console.log(decodeURI(es1));

//encodeURIComponent() decodeURIComponent()
console.log(encodeURIComponent(url));
let es2 = encodeURIComponent(url);
console.log(decodeURIComponent(es2));