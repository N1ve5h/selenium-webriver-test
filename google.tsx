const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

const test_case = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.google.co.uk");

  let rejectCookieButton = await driver.findElement(By.id("W0wltc"));
  rejectCookieButton.click();

  await driver.findElement(By.name("q")).sendKeys("Hello World!", Key.RETURN);

  setTimeout(async () => {
    await driver.quit();
  }, 5000);
};

test_case();
