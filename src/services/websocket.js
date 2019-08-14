const ws = new WebSocket("ws://localhost:8080/websocket");
//监听消息
ws.onmessage = function (event) {
  console.log(event.data);
};
// 打开WebSocket 
ws.onclose = function (event) {
};
// 打开WebSocket
ws.onopen = function (event) {
  ws.send("Hello, Server!");
};
ws.onerror = function (event) {
  //WebSocket Status:: Error was reported
};

export default ws;