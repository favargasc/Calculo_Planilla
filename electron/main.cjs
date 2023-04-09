const { app, BrowserWindow, Menu } = require("electron");

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

module.exports = {
  createWindow,
};
