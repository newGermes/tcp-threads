'use strict';

const net = require('net');

const port = '3000';
const hostname = '127.0.0.1';

const server = net.createServer(socket => {
  socket.on('data', data => {
    console.log(`Received data from client: ${data}`);
    socket.write(data);
  });
  socket.on('error', e => {
    console.log(e);
  });

  setTimeout(() => {
    socket.destroy();
    process.exit(1);
  }, 5000);
});

server.listen(port, hostname, () => {
  console.log(`Server has started: ${hostname}:${port}`);
});
