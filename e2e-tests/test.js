const { Builder, By } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

describe('E2E Test', function () {
    this.timeout(30000);
    let driver;

    beforeEach(async function () {
        const options = new firefox.Options();
        options.addArguments('-headless'); // Run in headless mode
        
        driver = await new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('Should add a task', async function () {
        await driver.get("http://localhost:3000/");
        await driver.findElement(By.css("input")).sendKeys("this is a task");
        await driver.findElement(By.css("button:nth-child(2)")).click();
    });
});
