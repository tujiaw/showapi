'use strict';
const showapi = require('../common/showapi')
const ejs = require('ejs')

$('#query').click(() => {
  const phoneNumber = $('#phone_number').val()
  const appParams = {num: phoneNumber}
  showapi.request('http://route.showapi.com/6-1', 17262, appParams, (json) => {
    console.log(json)
    if (json.showapi_res_code == 0) {
      const data = {
        phone_number: phoneNumber,
        prov: json.showapi_res_body.prov,
        city: json.showapi_res_body.city,
        operator: json.showapi_res_body.name,
        range: json.showapi_res_body.num,
        prov_number: json.showapi_res_body.provCode
      }
      var html = ejs.render($('#row').html(), data)
      $('table').append(html)
    }
  })
})
