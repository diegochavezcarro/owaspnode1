
const chrome = require('selenium-webdriver/chrome');

const {Builder, By, Key, until} = require('selenium-webdriver');

const width = 640;
const height = 480;

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
        new chrome.Options().headless().windowSize({width, height}))
    .build();

driver.get('http://www.google.com/ncr')
    .then(_ =>
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(
        _ => driver.quit(),
        e => driver.quit().then(() => { throw e; }));