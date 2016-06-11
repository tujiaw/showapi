'use strict';
const showapi = require('../common/showapi')

String.prototype.trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

$('#submit').click(() => {
  const issue = $('#issue').val().trim()
  if (issue.length == 0) {
    return
  }
  const appParams = {info: issue}
  showapi.request('http://route.showapi.com/60-27', 17262, appParams, (json) => {
    if (json.showapi_res_code == 0) {
      $('#answer').html(json.showapi_res_body.text)
    } else {
      $('#answer').html(json.showapi_res_error)
    }
  })
})

$('#issue').keypress((e) => {
  const key = e.which
  if (key == 13) {
    $('#submit').click()
    return false
  }
})
