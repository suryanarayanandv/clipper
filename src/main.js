const { app, BrowserWindow, Menu, ipcMain} = require("electron");
const menu = require('./menu.js');
const path = require('node:path');
const os = require('node:os')
const clip = os.type() === 'linux' ? require('./clip_ubutnu.js') : require('./clip_windows.js')
// const {mainscreen} = require('./screen.js')

const {screen} = require('electron');



setInterval(() => {
  const curr = clip.clipInfo();
  // const curr = clip.clipInfo().CLIP_NEW ?
  const curr_clip = curr.CLIP_NEW ? curr.CURRENT_CLIP : 'OLD  ';

  if (curr_clip != 'OLD') {
    /**
     * UPDATE CLIP RENDERER
     */
    console.log(clipboard.readText())
  }

}, 1000);

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    webPreferences: {
      preload: "preload.js",
      contextIsolation: true,
      devTools: true
    },
    
  });
  win.loadURL(path.join(__dirname, "../public/index.html"));
}


Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  createWindow();

  /**
   * get screen details
   */

  const mainScreen = screen.getPrimaryDisplay();
  const allScreen = screen.getAllDisplays();

  console.log(mainScreen)
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
