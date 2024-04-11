import{test}from'@playwright/test'

test('Screenshot by default in test',async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.locator('//input[@id="loginusername"]').fill('employee')
    await page.locator('//input[@id="loginpassword"]').fill('123')
    await page.locator('(//button[@class="btn btn-primary"])[3]').click()

})