 const{test,expect}=require('@playwright/test')

 test('Date picker/Calender', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

     await page.fill('//input[@id="datepicker"]','03/13/2024')
 })