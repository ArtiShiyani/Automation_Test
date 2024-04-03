import{test,expect} from '@playwright/test'

test('how to handle Auto Suggest Dropdown in Playwright',async({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator('//input[@id="src"]').fill('Ahmedabad')

    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI jTMXri")]/div/text[1]')

    const fromcityoption =await page.$$('//li[contains(@class,"sc-iwsKbI jTMXri")]/div/text[1]')
     
    for (let option of fromcityoption)
    {
         const value = await option.textContent()
         console.log(value)

         if(value.includes('Iskon'))

         await option.click()
         break

    }
     await page.waitForTimeout(5000)
})