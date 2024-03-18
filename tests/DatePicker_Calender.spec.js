 const{test,expect}=require('@playwright/test')

 test('Date picker/Calender', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

     await page.fill('//input[@id="datepicker"]','03/13/2024') // 1) first  way to insert date

     await page.waitForTimeout(3000)

     //Date Picker

     const year = "2024"
     const month ="September"
     const day ="07"

     await page.click('//input[@id="datepicker"]') // opens the calender

     await page.click('#datepicker') // opens the calender


     while(true)
     {
         const currentyear = page.locator('//span[@class="ui-datepicker-year"]').textContent()
         const currentmonth = page.locator('//span[@class="ui-datepicker-month"]').textContent()

         if(currentyear==year && currentmonth==month)
         {
            break;
         }
         await page.locator('[title="Next"]').click()
     }
     await page.waitForTimeout(3000)

     //To select the date

     const date = await page.locator('//a[@class="ui-state-default"]')

     for(const dt of date)
     {
        if(await dt.textContent()==day)
        {
            await dt.click()
            break;
        }
     }
 })