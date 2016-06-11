'use strict';

const showapi = require('../common/showapi')

$('#query').click(() => {
  const domain = $('#address').val()
  if (domain.length == 0) {
    return
  }
  const appParams = {domain: domain}
  showapi.request('http://route.showapi.com/846-1', 17262, appParams, (json) => {
    $('.result').append('<h5>查询结果：</h5>')
    $('.result').append('<ul>')
    if (json.showapi_res_code == 0) {
      let content = json.showapi_res_body.obj
      if (content) {
        for (let i in content) {
          $('.result').append(`<li>${content[i]}</li>`)
        }
      } else {
        $('.result').append(`<li>${json.showapi_res_body.remark}</li>`)
      }
    } else {
      $('.result').append(`<li>${json.showapi_res_error}</li>`)
    }
    $('.result').append('</ul>')
  })
})

$('#clear').click(() => {
  $('.result').empty()
})
