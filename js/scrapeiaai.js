const puppeteer = require('puppeteer');
let url = 'https://www.iaai.com/Vehicle?itemID=32163619&RowNumber=0';

let scrape = async () => {
  // Здесь выполняются операции скрапинга...
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(2000);
  //await page.click('#mainBody > div.inner-wrap > div > div.container-fluid.lot-details-page-print > div > div:nth-child(1) > div:nth-child(3) > div > div.row.no-margin > div.col-md-7.no-padding > div.row.no-margin > div.col-md-5.pull-right.no-padding.col-sm-12.col-xs-12.bid-right-col > div.formbox.sale-info-box > div > div > div > div > div > div:nth-child(1) > span > a');
  const result = await page.evaluate(()=> {
  	let location = document.querySelector('#vehicles-container > div.row.flexbox > div.col-6.pd-right-col > div.sale-info-wrapper h3 a').innerText;
  	return location;
  });
  browser.close();
  return result;
  // Возврат значения
};

scrape().then((value) => {
    console.log(value); // Получилось!
});