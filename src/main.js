const { app, BrowserWindow, Menu, ipcMain} = require("electron");
const menu = require('./menu.js');
const path = require('node:path');
const os = require('node:os')
const clip = os.type() === 'linux' ? require('./clip_ubutnu.js') : require('./clip_windows.js')
// const {mainscreen} = require('./screen.js')

const {screen} = require('electron');

if (require("electron-squirrel-startup")) app.quit();

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    icon: '../assets/images/icon.png',
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      devTools: true,
    },
    
  });
  win.loadURL(path.join(__dirname, "../public/index.html"));
  return win
}


Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  win = createWindow();
  win.webContents.openDevTools()
});

/**
 * Check for new clips
 * Resolve Promise?
 */
ipcMain.handle('updateClip', (event) => {
  const curr = clip.clipInfo();
  const curr_clip = curr.CLIP_NEW ? curr.CURRENT_CLIP : "OLD";
  if (curr_clip != "OLD") {
    return curr_clip;
  } else {
    console.log('OLD');
    return "OLD";
  }
})

/**
 * Controllers
 */
app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
