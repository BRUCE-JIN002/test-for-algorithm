//common.js的引入方式
const axios = require("axios").default;

//发起一个GET请求
//方式 1:
const axios = require("axios");
axios
    .get("/user?ID=1234")
    .then(function(response) {
        //请求成功
        console.log(response);
    })
    .catch(function(error) {
        //请求出错
        console.log(error);
    })
    .then(function() {
        //总会执行
        console.log("Done!");
    });

//方式 2：

axios
    .get("/user", {
        params: {
            ID: 1234,
        },
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {
        //总会执行
        console.log("Done!");
    });

// 支持 async/await用法：

async function getUser() {
    try {
        const response = await axios.get("/user?ID=1234");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}