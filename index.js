const { app, BrowserWindow } = require('electron');

function createWindow() { // Create the browser window.
  const win = new BrowserWindow({
    width:450,
    height:500,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL('http://localhost:5173');

}

app.whenReady().then(createWindow);
