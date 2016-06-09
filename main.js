const electron = require('electron')
const menuTemplate = require('./menu').template
const trayTempl = require('./menu').trayTempl
const path = require('path')
const {app} = electron
const {Menu} = electron
const {BrowserWindow} = electron
const {Tray} = electron
const ipc = electron.ipcMain

let win = null
let tray = null

function initMenu() {
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
}

function initWindow() {
  win = new BrowserWindow({width: 700, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  // win.webContents.openDevTools();

  win.on('close', (event) => {
    event.preventDefault()
    win.hide()
  })

  win.on('closed', () => {
    console.log('closed')
    win = null
  })
}

function initTray() {
  const iconPath = path.join(__dirname, 'tray.ico')
  tray = new Tray(iconPath)
  tray.setToolTip('show api')
  tray.setContextMenu(Menu.buildFromTemplate(trayTempl))
  tray.on('click', () => {
    win.show()
  })
}

app.on('ready', () => {
  initMenu()
  initWindow()
  initTray()
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    console.log('window-all-closed')
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipc.on('load_url', (event, url) => {
  if (win) {
    console.log(url)
    win.loadURL(url)
  }
})
