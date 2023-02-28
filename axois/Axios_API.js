//以向 axios 传递相关配置来创建请求

//axios(config);
//发起一个post请求
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});

//在node.js用 GET请求获取远程图片
axios({
  method: "get",
  url: "http://bit.ly/12345",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream)("add_lovelace.jpg");
});

//axios(url[, config])
//发起一个get请求(默认方式)
axios("/user/12345");

/**
 * 请求方式别名
 * 为了方便起见，已经为所有支持的请求方法提供了别名。
 * */

/**
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.options(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 * 注意:
 * 在使用别名方法时， url、method、data 这些属性都不必在配置中指定
 */
