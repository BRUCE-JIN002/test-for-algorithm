//发起一个 POST请求
axios
    .post("/user", {
        firstName: "Fred",
        lastName: "Flintston",
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

//发起多个并发请求
function getUserAccount() {
    return axios.get("/users/12345");
}

function getUserPermission() {
    return axios.get("user/12345permission");
}

Promise.all([getUserAccount(), getUserPermission()]).then(function(result) {
    const acct = result[0];
    const perm = result[1];
});