//创建AJAX请求的步骤：
/**
 * 1. 创建一个 XMLHttpRequest 对象。
 *
 * 2.在这个对象上使用 open 方法创建一个 HTTP 请求，
 * open 方法所需要的参数是：请求的方法、请求的地址、是否异步和用户的认证信息。
 *
 * 3.在发起请求前，可以为这个对象添加一些信息和监听函数。
 * 比如说可以通过 setRequestHeader 方法来为请求添加头信息。
 * 还可以为这个对象添加一个状态监听函数。
 * 一个 XMLHttpRequest 对象一共有 5 个状态，
 * 当它的状态变化时会触发onreadystatechange 事件，
 * 可以通过设置监听函数，来处理请求成功后的结果。
 * 当对象的 readyState 变为 4 的时候，代表服务器返回的数据接收完成，
 * 这个时候可以通过判断请求的状态，如果状态是 2xx 或者 304 的话则代表返回正常。
 * 这个时候就可以通过 response 中的数据来对页面进行更新了。
 *
 * 4.当对象的属性和监听函数设置完成后，最后调用 sent 方法来向服务器发起请求，
 * 可以传入参数作为发送的数据体。
 */

const SERVER_URl = "/server";
let xhr = new XMLHttpRequest();
//创建 http请求
xhr.open("GET", url, true);
//设置状态监听函数
xhr.onreadystatechange = function () {
	if (this.readyState !== 4) return;
	//请求成功时
	if (this.status === 200) {
		FileSystemHandle(this.response);
	} else {
		console.error(this.statusText);
	}
};

//设置请求失败时的监听函数
xhr.onerror = function () {
	console.error(this.statusText);
};
//设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
//发送 Http请求
xhr.send(null);

//使用Promise封装AJAX
function getJson(url) {
	//创建一个promise对象
	let promise = new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		//新建一个http请求
		xhr.open("GET", url, true);
		//设置状态的箭听函数
		xhr.onreadystatechange = function () {
			if (this.readyState !== 4) return;
			//请求成功或失败时改变promise的状态
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
		//设置错误监听函数
		xhr.onerror = function () {
			reject(new Error(this.statusText));
		};
		//设置相应的数据类型
		xhr.responseType = "json";
		//设置请求头信息
		xhr.setRequestHeader("Accept", "application/json");
		//发送http请求
		xhr.send(null);
	});
	return promise;
}
