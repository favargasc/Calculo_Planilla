const { spawn } = require("child_process");
const path = require("path");

const filePath = path.join(__dirname, "server");

const childProcess = spawn(filePath);

childProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

childProcess.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

childProcess.on("close", (code) => {
  console.log(`El proceso se ha cerrado con el código ${code}`);
});
