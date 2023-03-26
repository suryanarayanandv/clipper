const {screen} = require('electron')

const mainScreen = screen.getPrimaryDisplay()
const allScreen = screen.getAllDisplays()

module.exports.mainscreen = mainScreen;
module.exports.allScreen = allScreen;