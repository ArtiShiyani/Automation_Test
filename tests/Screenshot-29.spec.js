const{test,expect} = require('@playwright/test')

test('Page Screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests\Screenshot'+Date.now()+'Hompage.png'})

})

test(' Full Page Screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')

    await page.waitForTimeout(5000)

    await page.screenshot({path:'tests\Screenshot'+Date.now()+'FullHompage.png', fullPage:true})

})

test('Element Page Screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.waitForSelector(5000)
    await page.locator('(//div[@class="col"])[3]').screenshot({path:'tests\Screenshot'+Date.now()+'element.png'})

})