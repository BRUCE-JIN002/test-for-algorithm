// Loader 本质上就是一个函数，接收资源文件或者上一个 Loader 产生的结果作为入参，最终输出转换后的结果。

const loader1 = (source) => {
  return source + "//给你的代码加点注释：loader1\r\n";
};

const loader2 = (source) => {
  return source + "//给你的代码加点注释：loader2\r\n";
};

module.exports = {
  loader1,
  loader2
};
