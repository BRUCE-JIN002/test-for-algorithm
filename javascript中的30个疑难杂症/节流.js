const throttle = function (fun, delay) {
  var timer = null;
  return function () {
    var self = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fun.apply(self, args);
        timer = null;
      }, delay);
    }
  };
};

//处理函数
function handle() {
  console.log(Math.random());
}

window.addEventListener("scroll", throttle(handle, 1000));
