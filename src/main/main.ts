import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

const isDev = process.env.NODE_ENV === 'development';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  console.log("is dev:", isDev);
  if (isDev) {
    // In development, load from Vite dev server
    win.loadURL('http://localhost:5173');
    //mainWindow.webContents.openDevTools();
  } else {
    // In production, load from built files
    win.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
};

app.whenReady().then(() => {
  ipcMain.handle('executeSomething', () => 'something was successfully executed');

  createWindow();
});
