/**
 * Create api to post new value to renderer
 * and listneres
 * and os arch
 */

const { contextBridge, ipcRenderer } = require("electron");
const os = require('node:os');

contextBridge.exposeInMainWorld('clip', {
    osType: os.type(),
    updateClip: os.type() === 'linux' ? ipcRenderer.invoke('updateLinux') : ipcRenderer.invoke('updateWin')
});

