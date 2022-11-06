/**
 * POST 请求:
  要创建一个 POST 请求，或者其他方法的请求，我们需要使用 fetch 选项：
  method —— HTTP 方法，例如 POST，
  body —— request body，其中之一：
      字符串（例如 JSON 编码的），
      FormData 对象，以 form/multipart 形式发送数据，
      Blob/BufferSource 发送二进制数据，
      URLSearchParams，以 x-www-form-urlencoded 编码形式发送数据，很少使用。
  JSON 形式是最常用的。
 */

//下面这段代码以 JSON 形式发送 user 对象
let user = {
    name: "Jhon",
    surname: "Smith",
};

let response = await fetch("/article/fetch/post/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
});

let result = await response.json();
console.log(result.message);

/**
 * 请注意，如果请求的 body 是字符串，则 Content-Type 会默认设置为 text/plain;charset=UTF-8。
 * 但是，当我们要发送 JSON 时，我们会使用 headers 选项来发送 application/json，
 * 这是 JSON 编码的数据的正确的 Content-Type。
 */