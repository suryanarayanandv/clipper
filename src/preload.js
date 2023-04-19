/**
 * Create api to post new value to renderer
 * and listneres
 * and os arch
 */

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("clip", {
  updateClip: () => ipcRenderer.invoke("updateClip").then((value) => value),
});
