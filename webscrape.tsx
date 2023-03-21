const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");


const scrape = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get('https://ratings.fide.com/top.phtml?list=men');

  let names = await driver.findElements(By.css(".tur"));

  for (let name of names) {
    console.log(await name.getText());
    
  }
  
  await driver.quit();
}

scrape();