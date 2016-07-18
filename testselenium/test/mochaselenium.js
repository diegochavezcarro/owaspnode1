var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google Search', function () {
    var driver;
    test.before(function () {
        driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
    });
    test.after(function () {
        driver.quit();
    });

    test.it('se fija si aparece la palabra en la busqueda', function () {
        this.timeout(7000);
        driver.get('http://www.google.com');
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('simple programmer');
        searchBox.getAttribute('value').then(function (value) {
            assert.equal(value, 'simple programmer');
        });
    });
    test.it('se fija si aparece la palabra en el titulo luego de buscar', function () {
        this.timeout(7000);
        driver.get('http://www.google.com');
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver');
        driver.findElement(webdriver.By.name('btnG')).click();
        driver.wait(webdriver.until.titleContains('webdriver'), 3000);
    });

});