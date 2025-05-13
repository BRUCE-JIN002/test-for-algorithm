// sharedWorker.js
let connections = 0;

self.onconnect = function (e) {
  const port = e.ports[0];
  connections++;

  // 当有新连接时，向所有连接的页面广播消息
  port.onmessage = function (event) {
    const message = event.data;
    port.postMessage(`收到消息: ${message}，当前连接数: ${connections}`);
  };

  // 当连接关闭时减少计数
  port.onclose = function () {
    connections--;
  };

  // 初始化时发送连接成功的消息
  port.postMessage(`连接成功！当前连接数: ${connections}`);
};
