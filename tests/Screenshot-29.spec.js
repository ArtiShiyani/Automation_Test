const{test,expect} = require('@playwright/test')

//  perticuler test >>  await page.screenshot({path:})
//  but if for all test , need to capture screenshot. so we need to add  screenshot:on  in config file

test('Page Screenshot',async({page})=>{

    await page.goto('https://demo.opencart.com/')
    const buffer=await page.screenshot({path:'tests\Screenshot'+Date.now()+'Hompage.png'})
    console.log(buffer.toString('base64'))

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