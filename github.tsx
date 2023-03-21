const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
require('dotenv').config();
const { USER_EMAIL, USER_PASSWORD } = process.env;

const test_case = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://github.com");
  
  await driver.findElement(By.partialLinkText("Sign in")).click();

  await driver.wait(until.elementLocated(By.name("login"))); //wait for the page to load until the input element is found.

  if (await driver.getTitle() !== "Sign in to GitHub · GitHub") { //test if the page is loaded.
    console.log(("Test #1 failed"));
    return await driver.quit();
  }
  console.log("Test #1 success");

  await driver.findElement(By.name("login")).sendKeys(USER_EMAIL); //input email
  await driver.findElement(By.name("password")).sendKeys(USER_PASSWORD, Key.RETURN); //input password & enter 


  if (await driver.getTitle() !== "GitHub") { //test if the user successfully logged in
    console.log("Test #2 failed");
    return await driver.quit();
  }
  console.log("Test #2 success");
  

  setTimeout(async () => {
    await driver.quit();
  }, 5000);
};

test_case();
