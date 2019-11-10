const path = require("path");
const { Worker } = require("worker_threads");

// first run
new Worker(path.join(__dirname, "worker.js"));

// second run
setTimeout(() => {
  new Worker(path.join(__dirname, "worker.js"));
}, 10000);
