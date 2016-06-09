'use strict';

const ipc = require('electron').ipcRenderer
const ejs = require('ejs')

const funcList = [
  {
    webName: 'record_query.html',
    img: 'https://www.showapi.com/images/apiLogo/20150928/5423acc973f41c03173a186a_5be02ffc910a49afbc82a3d16a7ef31a.png',
    title: '备案查询',
    brief: '根据域名，查询其备案信息，包括公司名称、备案号、系统名称、备案类型、备案资料更新时间。'
  },
  {
    webName: 'phone_belong.html',
    img:'https://www.showapi.com/images/apiLogo/20150609/5423acc973f41c03173a186a_87849c4e364a4d5cbdc0c6286b5b2736.png',
    title: '手机归属地查询',
    brief: '最新手机号段数据库，手机号码归属地数据库，2015年4月3183800条'
  }
]

const html = ejs.render($('#func_list').html(), {funcList: funcList})
$('.container').html(html)

$('.func').click((e) => {
  const webName = $(e.target).closest('.func').attr('webName')
  ipc.send('load_url', `file://${__dirname}/${webName}`)
})
