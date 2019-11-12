'use strict';

const net = require('net');

const socket01 = new net.Socket();
const socket02 = new net.Socket();

const port = '3000';
const host = '127.0.0.1';

// fist client
socket01.connect({ port, host }, () => {
  socket01.write('First!');
});

// reconnect
setTimeout(() => {
  socket01.connect({ port, host }, () => {
    socket01.write('Reconnect First!');
  });
}, 20000);

socket01.on('data', data => {
  console.log(`Received data from server: ${data}`);
  socket01.write('First!');
});

socket01.on('error', e => {
  console.log(`First Error: ${e.message}`);
});
socket01.on('close', e => {
  console.log(`First Close: ${e}`);
});

// second client
socket02.connect({ port, host }, () => {
  socket02.write('Second!');
});

// reconnect
setTimeout(() => {
  socket02.connect({ port, host }, () => {
    socket02.write('Reconnect Second!');
  });
}, 20000);

socket02.on('data', data => {
  console.log(`Received data from server: ${data}`);
  socket02.write('Second!');
});

socket02.on('error', e => {
  console.log(`Second Error: ${e.message}`);
});
socket02.on('close', e => {
  console.log(`Second Close ${e}`);
});
