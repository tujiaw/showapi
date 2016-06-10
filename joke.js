'use strict';

const showapi = require('./showapi')
const ejs = require('ejs')

$(".nav-tabs a").click(function(e){
    $(e.target).tab('show')
    const index = parseInt($(e.target).attr('index'))
    showTab(index)
});

function showTab(index) {
  if (index === 0 && textJokeParams.page === 0) {
    textJokeParams.page = 1
    textJokeRequest()
  } else if (index === 1 && imageJokeParams.page === 0) {
    imageJokeParams.page = 1
    imageJokeRequest()
  } else if (index === 2 && gifJokeParams.page === 0) {
    gifJokeParams.page = 1
    gifJokeRequest()
  }
}

let textJokeParams = {
  time: '2015-07-10',
  page: 0
}

let imageJokeParams = {
  time: '2015-07-10',
  page: 0
}

let gifJokeParams = {
  page: 0
}

function textJokeRequest() {
  showapi.request('http://route.showapi.com/341-1', 17262, textJokeParams, (json) => {
    console.log(json)
    if (json.showapi_res_code == 0) {
      const html = ejs.render($('#text_list').html(), {contentlist: json.showapi_res_body.contentlist})
      $('#text_joke').append(html)
      $('.next_page').click((e) => {
        $(e.target).remove()
        $('#text_joke').append('<hr>')
        ++textJokeParams.page
        textJokeRequest()
      })
    }
  })
}

function imageJokeRequest() {
  showapi.request('http://route.showapi.com/341-2', 17262, imageJokeParams, (json) => {
    console.log(json)
    if (json.showapi_res_code == 0) {
      const html = ejs.render($('#image_list').html(), {contentlist: json.showapi_res_body.contentlist})
      $('#image_joke').append(html)
      $('.next_page').click((e) => {
        $(e.target).remove()
        $('#image_joke').append('<hr>')
        ++imageJokeParams.page
        imageJokeRequest()
      })
    }
  })
}

function gifJokeRequest() {
  showapi.request('http://route.showapi.com/341-3', 17262, gifJokeParams, (json) => {
    console.log(json)
    if (json.showapi_res_code == 0) {
      const html = ejs.render($('#image_list').html(), {contentlist: json.showapi_res_body.contentlist})
      $('#gif_joke').append(html)
      $('.next_page').click((e) => {
        $(e.target).remove()
        $('#gif_joke').append('<hr>')
        ++gifJokeParams.page
        gifJokeRequest()
      })
    }
  })
}

showTab(0)
