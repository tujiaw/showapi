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
  },
  {
    webName: 'movie_rank.html',
    img:'https://www.showapi.com/images/apiLogo/20150806/54a253186e36f6005a077bbd_88d931a475d443bea4e1bcd7e31fcc71.jpg',
    title: '电影排行',
    brief: '影院日排行榜，单月票房，周末票房，单日票房，单周票房'
  },
  {
    webName: 'joke.html',
    img:'https://www.showapi.com/images/apiLogo/20150710/5423acc973f41c03173a186a_28e1f95c262749319fd093af97eaebf4.jpg',
    title: '笑话大全',
    brief: '笑话大全，信息搜集整理于互联网，每小时更新，包括文字笑话、搞笑图片等。'
  },
  {
    webName: 'robot.html',
    img:'https://www.showapi.com/images/apiLogo/20150604/5423acc973f41c03173a186a_6211d57da25345b2ac6f4fe9121c07c9.jpg',
    title: '图灵机器人',
    brief: '图灵机器人是国内第一家个性化智能机器人开放平台，为广大开发者提供免费的智能机器人API端口'
  }
]

const html = ejs.render($('#func_list').html(), {funcList: funcList})
$('.container').html(html)

$('.func').click((e) => {
  const webName = $(e.target).closest('.func').attr('webName')
  ipc.send('load_url', `file://${__dirname}/../view/${webName}`)
})
