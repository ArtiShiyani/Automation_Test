 const{test,expect}=require('@playwright/test')

 test('Date picker/Calender', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

     //await page.fill('//input[@id="datepicker"]','03/13/2024') // 1) first  way to insert date

     await page.waitForTimeout(10000)

     //Date Picker

     const year = "1993"
     const month ="September"
     const day ="07"

     await page.click('//input[@id="datepicker"]') // opens the calender

     //await page.click('#datepicker') // opens the calender


     while(true)
     {
         const currentyear = page.locator('//span[@class="ui-datepicker-year"]').textContent()
         const currentmonth = page.locator('//span[@class="ui-datepicker-month"]').textContent()

         if(currentyear==year && currentmonth==month)
         {
            break;
         }
         //await page.locator('[title="Next"]').click() // to click the next year
         await page.locator('[title="Prev"]').click() // to click the previous year

     }
     await page.waitForTimeout(10000)

     // 1st way to seleect the date

     const date = await page.locator('//a[@class="ui-state-default"]')

     for(const dt of date)
     {
        if(await dt.textContent()==day)
        {
            await dt.click()
            break;
        }
     }

     // 2) way to select the date >>Date selection without loop
     //await page.click('//a[@class="ui-state-default"][text()="15"]')>> xpath
     //await page.click(`//a[@class="ui-state-default"][text()="${day}"]`) //parameterize from the  xpath n need to use (``) 

 })