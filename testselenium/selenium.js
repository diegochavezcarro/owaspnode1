var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('http://www.google.com/ncr');
var q= driver.findElement(By.name('q'));
q.sendKeys('webdriver');
q.submit();

driver.wait(until.titleIs('webdriver - Google Search'), 3000);
driver.quit();

