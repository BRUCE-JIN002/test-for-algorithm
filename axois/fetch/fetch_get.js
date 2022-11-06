let promise = fetch(url, [options]);
//url —— 要访问的 URL。
//options —— 可选参数：method，header 等
//没有 options，那就是一个简单的 GET 请求，下载 url 的内容。

//获取响应的两个阶段：
//1.第一阶段，当服务器发送了响应头（response header），
//fetch 返回的 promise 就使用内建的 Response class 对象来对响应头进行解析.
/**
 * 如果 fetch 无法建立一个 HTTP 请求，例如网络问题，亦或是请求的网址不存在，那么 promise 就会 reject。异常的 HTTP 状态，例如 404 或 500，不会导致出现 error。
 * 我们可以在 response 的属性中看到 HTTP 状态：
 * status —— HTTP 状态码，例如 200
 * ok —— 布尔值，如果 HTTP 状态码为 200-299，则为 true
 */

let response = await fetch(url);
if (response.ok) {
    // 如果 HTTP 状态码为 200-299
    let json = await response.json();
} else {
    console.log("HTTP_Error: " + response.status);
}

/**
 * 第二阶段，为了获取 response body，我们需要使用一个其他的方法调用。
 
  Response 提供了多种基于 promise 的方法，来以不同的格式访问 body：

  response.text() —— 读取 response，并以文本形式返回 response，
  response.json() —— 将 response 解析为 JSON，
  response.formData() —— 以 FormData 对象（在 下一章 有解释）的形式返回 response，
  response.blob() —— 以 Blob（具有类型的二进制数据）形式返回 response，
  response.arrayBuffer() —— 以 ArrayBuffer（低级别的二进制数据）形式返回 response，
  另外，response.body 是 ReadableStream 对象，它允许你逐块读取 body，我们稍后会用一个例子解释它。
 */

let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
let response1 = await fetch(url);

let commits = await response1.json(); //读取 response body，并将其解析为 JSON
console.log(commits[0].author.login);

//或者使用纯promise的方法：
fetch(
        "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
    )
    .then((response) => response.json())
    .then((commits) => commits[0].author.login);

//要获取响应文本，可以使用 await response.text() 代替 .json()：
let response2 = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
);

let text = await response.text();
console.log(text.slice(0, 80) + "...");

/**
 * 我们只能选择一种读取 body 的方法。
 * 如果我们已经使用了 response.text() 方法来获取 response，
 * 那么如果再用 response.json()，则不会生效，因为 body 内容已经被处理过了
 */

//Response header
let response3 = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
);
// 获取一个 header
console.log(response3.headers.get("Content-Type"));
//迭代所有header
for (let [key, value] of response3.headers) {
    console.log(`${key} = ${value}`);
}

//Request header
//要在 fetch 中设置 request header，我们可以使用 headers 选项。
//它有一个带有输出 header 的对象，如下所示：
let response4 = fetch(url, {
    headers: {
        Authenticated: "secret",
    },
});