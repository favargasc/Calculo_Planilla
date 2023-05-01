const { app, BrowserWindow, Menu } = require("electron");
const { exec } = require("child_process");

let window;

Menu.setApplicationMenu(null);

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Carga la página de React desde el servidor de desarrollo en el puerto 3000
  window.maximize();
  window.loadURL("http://localhost:5173");
  window.on("closed", function () {
    window = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.whenReady().then(() => {
  exec("npm run server", (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  exec("npm run dev", (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});

module.exports = {
  createWindow,
};
