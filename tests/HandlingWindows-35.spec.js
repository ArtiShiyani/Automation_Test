const {test,expect,chromium}=require('@playwright/test')
//browser contains the context and context conatins the multiple pages
//This is without using 'page' fixture.

test.skip('Handle Pages/Windows',async()=>{

    test.slow()

    //Creating new browser
        const browser = await chromium.launch()

    //Creating new browser context
    const context =await browser.newContext() 
    
     //Creating new pages
     const page1 =await context.newPage()
     const page2 =await context.newPage()

     const allpages = context.pages()
     console.log('Number of pages created:',allpages.length)

     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     expect(page1).toHaveTitle('OrangeHRM')

     await page2.goto('https://www.orangehrm.com/')
     expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')


})

test('Handle Multiple Pages/Windows',async()=>{

    test.slow()

    //Creating new browser
        const browser = await chromium.launch()

    //Creating new browser context
    const context =await browser.newContext() 
    
     //Creating new pages
     const page1 =await context.newPage()

     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     expect(page1).toHaveTitle('OrangeHRM')

     
     const pagePromise = context.waitForEvent('page') //  open new page with empty tab
     await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

     const newpage = await pagePromise;
     expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM')

     await page1.waitForTimeout(3000)
     await newpage.waitForTimeout(3000)

     await browser.close()

     


})