const {Menu, MenuItem} = require('electron');
const {app} = require('electron')

const menu = new Menu();
const about = new MenuItem({
  label: "about",
  role: "about",
  accelerator: process.platform === "darwin" ? "Alt+Cmd+A" : "Alt+Shift+A",
  click: () => {
    console.log("This is us");
  },
});

const exit = new MenuItem({
  label: "app",
  submenu: [
    {
      label: "exit",
      role: "exit",
      accelerator: process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
      click: () => {
        app.quit();
      },
    },
  ],
});

menu.append(exit);
menu.append(about);

module.exports = menu;