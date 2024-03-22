import{test,expect} from'@playwright/test'

test('Mouse Double click Action',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const doubleclickbutton = await page.locator('//button[text()="Copy Text"]')


    //To double click action 
    await doubleclickbutton.dblclick()

     const text = await page.locator('//input[@id="field2"]')

     await expect(text).toHaveValue('Hello World!')

     await page.waitForTimeout(5000)


})