var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');
const puppeteer = require('puppeteer');

let lotUrl = 'https://www.copart.com/lot/42596478';

let scrape = async () => {
  // Здесь выполняются операции скрапинга...
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(lotUrl);
  await page.waitFor(4000);
  const result = await page.evaluate(()=> {
    return document.querySelector('#mainBody > div.inner-wrap > div > div.container-fluid.lot-details-page-print > div > div:nth-child(1) > div:nth-child(3) > div > div.row.no-margin > div.col-md-7.no-padding > div.row.no-margin > div.col-md-5.pull-right.no-padding.col-sm-12.col-xs-12.bid-right-col > div.formbox.sale-info-box > div > div > div > div > div > div:nth-child(1) > span > a').innerText;    
  });
  browser.close();
  return result;
};


function accept(req, res) {
  // если URL запроса /vote, то...
  if (req.url == '/vote') {
    scrape().then(
      (value) => {
      console.log(value); // Получилось!
      res.end(value);
      })
    
  } else {
    // иначе считаем это запросом к обычному файлу и выводим его
    file.serve(req, res); // (если он есть)
  }
}

// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8081);
  console.log('server running on the port 8081');
} else {
  exports.accept = accept;
}