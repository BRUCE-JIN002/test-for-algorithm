//总结：

//典型的 fetch 请求由两个 await 调用组成：
let response = await fetch(url, options); // 解析 response header
let result = await response.json(); // 将 body 读取为 json

//或者以 promise 形式：

fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
        "处理程序";
    });

//响应的属性：
/**
 * response.status —— response 的 HTTP 状态码，
 * response.ok —— HTTP 状态码为 200-299，则为 true。
 * response.headers —— 类似于 Map 的带有 HTTP header 的对象。
 */

//获取 response body 的方法：

/**
 * response.text() —— 读取 response，并以文本形式返回 response，
 * response.json() —— 将 response 解析为 JSON 对象形式，
 * response.formData() —— 以 FormData 对象（form/multipart 编码，参见下一章）的形式返回 response，
 * response.blob() —— 以 Blob（具有类型的二进制数据）形式返回 response，
 * response.arrayBuffer() —— 以 ArrayBuffer（低级别的二进制数据）形式返回 response。
 */

//到目前为止我们了解到的 fetch 选项：

/**
   * method —— HTTP 方法，
     headers —— 具有 request header 的对象（不是所有 header 都是被允许的）
     body —— 要以 string，FormData，BufferSource，Blob 或 UrlSearchParams 对象的形式发送的数据（request body）。
*/