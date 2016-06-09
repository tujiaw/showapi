'use strict';

const showapi = require('./showapi')
const ejs = require('ejs')

function boxOffice(page) {
  $('#content').empty()
  const url = 'http://route.showapi.com/' + page
  showapi.request(url, 17262, {}, (json) => {
    if (json.showapi_res_code == 0) {
      if (json.showapi_res_body.ret_code == 0) {
        console.log(json.showapi_res_body.datalist)
        let datalist = []
        json.showapi_res_body.datalist.forEach((item) => {
          let data = {}
          data.Rank = item.Rank
          data.MovieName = item.MovieName
          data.BoxOffice = item.BoxOffice || item.WeekAmount
          data.BoxOffice_Up = item.BoxOffice_Up || item.Amount_Up
          data.SumBoxOffice = item.SumBoxOffice || item.SumWeekAmount
          data.AvgPrice = item.AvgPrice
          data.AvpPeoPle = item.AvpPeoPle || item.AvgPeople
          data.WomIndex = item.WomIndex
          data.MovieDay = item.MovieDay
          datalist.push(data)
        })

        console.log(datalist)

        const html = ejs.render($('#day_box_office').html(), {datalist: datalist})
        $('#content').html(html)
      }
    }
  })
}
$('#day').click(() => {
  boxOffice('578-2')
})

$('#weekend').click(() => {
  boxOffice('578-3')
})

$('#week').click(() => {
  boxOffice('578-1')
})

$('#month').click(() => {
  boxOffice('578-4')
})

$('#cinema').click(() => {

})

$('#day').click();
