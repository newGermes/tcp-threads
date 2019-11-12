'use strict';

const path = require('path');
const { fork } = require('child_process');

// first run
fork(path.join(__dirname, 'worker.js'));

// second run
setTimeout(() => {
  fork(path.join(__dirname, 'worker.js'));
}, 10000);
