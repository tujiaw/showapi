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
        focusedWindow.loadURL(`file://${__dirname}/../view/index.html`)
      }
    }
  }, {
    label: '备案查询',
    accelerator: 'Ctrl+B',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/../view/record_query.html`)
      }
    }
  }, {
    label: '手机归属地',
    accelerator: 'Ctrl+P',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/../view/phone_belong.html`)
      }
    }
  }, {
    label: '电影排行',
    accelerator: 'Ctrl+M',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/../view/movie_rank.html`)
      }
    }
  }, {
    label: '笑话大全',
    accelerator: 'Ctrl+J',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/../view/joke.html`)
      }
    }
  }, {
    label: '图灵机器人',
    accelerator: 'Ctrl+T',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.loadURL(`file://${__dirname}/../view/robot.html`)
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
    label: '退出',
    accelerator: 'CmdOrCtrl+Q',
    click: () => {
      app.exit(0)
    }
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
