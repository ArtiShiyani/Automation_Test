import{test, expect} from'@playwright/test'

test('Trace in playwright',async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.locator('//a[@id="login2"]').click()
    await page.locator('#loginusername').fill('employee')
    await page.locator('#loginpassword').fill('123')
    await page.locator('(//button[@class="btn btn-primary"])[3]').click()
    await expect(page.locator('//a[@id="logout2"]')).toBeVisible()
    await page.waitForSelector('5000')

})