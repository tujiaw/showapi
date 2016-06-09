'use strict';

const electron = require('electron')
const {BrowserWindow} = electron
const {app} = electron

let template = [{
  label: '功能',
  submenu: [{
    label: '首页',
    accelerator: 'Ctrl+H',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/index.html`)
      }
    }
  }, {
    label: '备案查询',
    accelerator: 'Ctrl+B',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/record_query.html`)
      }
    }
  }]
}, {
  label: '查看',
  submenu: [{
    label: '全屏',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    label: '开发工具',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Alt+Command+I'
      } else {
        return 'Ctrl+Shift+I'
      }
    })(),
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools()
      }
    }
  }, //{type: 'separator'}
  ]
}, {
  label: '窗口',
  role: 'window',
  submenu: [{
    label: '最小化',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: '关闭',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }]
}, {
  label: '帮助',
  role: 'help',
  submenu: [{
    label: '关于',
    click: function () {
      electron.shell.openExternal('http://tujiaw.github.io')
    }
  }]
}]

let trayTempl = [{
  label: '退出',
  click: () => {
    app.exit(0)
  }
}]

module.exports.template = template
module.exports.trayTempl = trayTempl
