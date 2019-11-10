const net = require("net");

const socket_01 = new net.Socket();
const socket_02 = new net.Socket();

const port = "3000";
const host = "127.0.0.1";

// fist client
socket_01.connect({ port, host }, () => {
  socket_01.write("First!");
});

// reconnect
setTimeout(() => {
  socket_01.connect({ port, host }, () => {
    socket_01.write("Reconnect First!");
  });
}, 20000);

socket_01.on("data", data => {
  console.log(`Received data from server: ${data}`);
  socket_01.write("First!");
});

socket_01.on("error", e => {
  console.log(`First Error: ${e.message}`);
});
socket_01.on("close", e => {
  console.log(`First Close: ${e}`);
});

// second client
socket_02.connect({ port, host }, () => {
  socket_02.write("Second!");
});

// reconnect
setTimeout(() => {
  socket_02.connect({ port, host }, () => {
    socket_02.write("Reconnect Second!");
  });
}, 20000);

socket_02.on("data", data => {
  console.log(`Received data from server: ${data}`);
  socket_02.write("Second!");
});

socket_02.on("error", e => {
  console.log(`Second Error: ${e.message}`);
});
socket_02.on("close", e => {
  console.log(`Second Close ${e}`);
});
