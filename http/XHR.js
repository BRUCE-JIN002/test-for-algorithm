let xhr = (function () {
  let hr;
  if (window.XMLHttpRequest) {
    //如果存在XMLHttpRquest， 就直接使用 XMLHttpRequest
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    //IE
    //如果不存在 XMLHttpRequest， 但存在 ActiveXObject， 则考虑使用ActiveXObject的情况

    //XMLHttp 版本
    let version = [
      "Msxml2.XMLHttp.5.0",
      "Msxml2.XMLHttp.4.0",
      "Msxml2.XMLHttp.3.0",
      "Msxml2.XMLHttp",
      "Microsoft.XMLHttp"
    ];

    //通过for循环尝试生成某个 XMLHttp 版本的 ActiveXObject实例
    //try...catch 捕获并消化 ActiveXObject 实例化失败的错误
    try {
      for (let i = 0; i < version.length; i++) {
        xhr = new ActiveXObject(version[i]);
        break;
      }
    } catch (error) {
      window.alert("error...");
    }

    if (!xhr) {
      alert("当前环境不支持初始化Ajax对象");
    }
  }
  //最后返回 xhr对象， 如果宿主环境不提供 XMLHttpRequest 及 ActiveXObject, 返回 undefined
  return hr;
})();

//发送请求
xhr.open("GET", "http://www.example.com");
xhr.send();

//实际可以传 5个参数
xhrReq.open(method, url, async, user, password);
/**
 * method: 代表HTTP请求的方法名，比如 GET、POST、 PUT 和 DELETE。
 * url: 一个DomString，代表着要想向其发送请求的 url。
 * async: 表示是否异步。
 * user：用户名，用于认证用途。
 * password：密码，用于认证用途。
 */

//get请求
xhr.open("GET", "http://localhost:8080/simple/get?mk=慕课网");

xhr.send();

//post请求
xhr.open("POST", "http://localhost:8080/simple/post");

//setRequestHeader设置 Contnent-type的类型， 服务端根据指定的 Content-type进行请求主体的解析
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send("mk=慕课网&class=ajax");

//send方法接受可选参数作为请求主体， 即发送到服务器的内容
//Content-type 需要设置为请求主体的类型， 如果不设置的话会才去默认值， 很多时候服务端无法解析参数

/**
 * Ajax 处理服务器响应
 */

xhr.open("GET", "http://lcoalhost:8080/simple/get/?mk=慕课网");

xhr.send();

//获取响应内容的核代码
xhr.onreadystatechange = function () {
  //当前 this 为 xhr
  if (this.readyState == 4) {
    if (this.status === 200 || this.status === 304) {
      let res = this.response;
      let resText = this.responseText;
      let resXml = this.responseXML;
      console.log(res, resText, resXml);
    }
  }
};

//Ajax封装
function xhr(config) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    //调用open方法
    request.open(method, url);

    request.onreadystatechange = function handLoad() {
      if (request.readyState !== 4) return;
      if (request.status === 0) return;
      const responseData = request.response;
      resolve(responseData);
    };
    request.send(data);
  });
}

/**
 * method 标准化
 */

method.toUppercase();

/**
 * 构建url
 * @param {*} url
 * @param {*} param
 */

function buildUrl(url, param) {
  //如果params没有或者不是一个纯的对象，直接返回url
  if (!param || !isPlainObject(param)) return url;
  let values = [];
  Object.keys(param).forEach(() => {
    //对 params 中的每一项进行处理
    const val = param[key];
    if (typeof val === undefined || val === null) {
      //如果当前项的值为 undefined 或者 null，则直接忽略
      return;
    }
    values.push(`${key}=${val}`); //将“key=value”的形式加入到数组中
  });

  let serializedParams = values.join("&");
  if (serializedParams) {
    //如果有值，则加入到url后面， 构成 “url？key=value&key=value”的形式
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

const toString = Object.prototype.toString;
/**
 * 判断当前 val 是不是一个纯对象
 * @param {*} val
 */

function isPlainObject(val) {
  return toString.call(val) === "[object Object]";
}

/**
 * 标准化data
 */

function transformData(data) {
  if (isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data;
}

/**
 * 设置 headers
 */

function transformHeaders(headers) {
  const contentTypeKey = "Content-Type"; //Content-Type的 key 常量
  if (isPlainObject(headers)) {
    Object.keys(headers).forEach((key) => {
      if (
        key !== contentTypeKey &&
        key.toUpperCase() === contentTypeKey.toUpperCase()
      ) {
        headers[contentTypeKey] = headers[key];
        delete headers[key];
      }
    });
    if (!headers[contentTypeKey]) {
      headers[contentTypeKey] = "application/json; charset=utf-8";
    }
  }
}

//在 function xhr 中设置头部
//设置头部
transformHeaders(headers);
Object.key(headers).forEach((key) => {
  if (!data && key === "Content-Type") {
    delete headers[key];
    return;
  }
  request.setRequestHeader(key, headers[key]);
});
