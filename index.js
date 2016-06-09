'use strict';

const ipc = require('electron').ipcRenderer
const ejs = require('ejs')

const funcList = [
  {
    img:'https://www.showapi.com/images/apiLogo/20150928/5423acc973f41c03173a186a_5be02ffc910a49afbc82a3d16a7ef31a.png',
    title:'备案查询',
    brief:'根据域名，查询其备案信息，包括公司名称、备案号、系统名称、备案类型、备案资料更新时间。'
  }
]

const html = ejs.render($('#func_list').html(), {funcList: funcList})
$('.container').html(html)

$('.func').click(() => {
  ipc.send('load_url', `file://${__dirname}/record_query.html`)
})
