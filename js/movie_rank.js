'use strict';

const showapi = require('../common/showapi')
const ejs = require('ejs')

$('#day').click(() => {
  showapi.request('http://route.showapi.com/578-2', 17262, {}, (json) => {
    if (json.showapi_res_code == 0) {
      if (json.showapi_res_body.ret_code == 0) {
        let datalist = json.showapi_res_body.datalist
        datalist.sort((a, b) => { return parseInt(a.Rank) - parseInt(b.Rank) })
        const html = ejs.render($('#day_box_office').html(), {datalist: datalist})
        $('#content').html(html)
      }
    }
  })
})

$('#weekend').click(() => {
  showapi.request('http://route.showapi.com/578-3', 17262, {}, (json) => {
    if (json.showapi_res_code == 0) {
      if (json.showapi_res_body.ret_code == 0) {
        let datalist = json.showapi_res_body.datalist
        datalist.sort((a, b) => { return parseInt(a.MovieRank) - parseInt(b.MovieRank) })
        const html = ejs.render($('#weekend_box_office').html(), {datalist: datalist})
        $('#content').html(html)
      }
    }
  })
})

$('#week').click(() => {
  showapi.request('http://route.showapi.com/578-1', 17262, {}, (json) => {
    if (json.showapi_res_code == 0) {
      if (json.showapi_res_body.ret_code == 0) {
        let datalist = json.showapi_res_body.datalist
        datalist.sort((a, b) => { return parseInt(a.Rank) - parseInt(b.Rank) })
        console.log(datalist)
        const html = ejs.render($('#week_box_office').html(), {datalist: datalist})
        $('#content').html(html)
      }
    }
  })
})

$('#month').click(() => {
  showapi.request('http://route.showapi.com/578-4', 17262, {}, (json) => {
    if (json.showapi_res_code == 0) {
      if (json.showapi_res_body.ret_code == 0) {
        let datalist = json.showapi_res_body.datalist
        datalist.sort((a, b) => { return parseInt(a.rank) - parseInt(b.rank) })
        const html = ejs.render($('#month_box_office').html(), {datalist: datalist})
        $('#content').html(html)
      }
    }
  })
})

$('#cinema').click(() => {
  showapi.request('http://route.showapi.com/578-6', 17262, {}, (json) => {
    if (json.showapi_res_code == 0) {
      if (json.showapi_res_body.ret_code == 0) {
        let datalist = json.showapi_res_body.datalist
        // 排序
        datalist.sort((a, b) => { return parseInt(a.RowNum) - parseInt(b.RowNum) })
        // 去重
        for (let i = datalist.length - 1 ; i > 0; i--) {
          if (datalist[i].RowNum == datalist[i - 1].RowNum) {
            datalist.splice(i, 1)
          }
        }
        const html = ejs.render($('#cinema_day_rank').html(), {datalist: datalist})
        $('#content').html(html)
      }
    }
  })
})

$('a').click((e) => {
  $('a').css('color', '#0000ff')
  $(e.target).css('color', '#ff0000')
})

$('#day').click();
