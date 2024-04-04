//import{test,expect} from '@playwright/test'
 
const {test,expect}=require('@playwright/test')
const { beforeEach } = require('node:test')

// beforeEach >> This hook is executed before each  individual test block.
// afterEach >> This hook is executed after each individual test block.

// beforeAll >> This hook is executed once  before any of the test starts running.
// afterall >> This hook is executed once after all the tests have been run.
//Hookdont accept the {page} fixture

let page;
test.beforeEach(async ({browser})=>{

    page= await browser.newPage()
    //Login
    await page.goto('https://demoblaze.com/')
    await page.locator('//input[@id="loginusername"]').fill('employee')
    await page.locator('//input[@id="loginpassword"]').fill('123')
    await page.locator('(//button[@class="btn btn-primary"])[2]').click()

})
test.afterEach(async()=>{

    //Logout
    await page.locator('//a[@id="logout2"]').click()


})

test('Homepage test ',async({page})=>{

     const products =await page.$$('.hrefch')
     expect (products).toHaveLength(9)
})
test('Add to cart. ',async({page})=>{

    await page.locator('//a[text()="Samsung galaxy s6"]').click()
    await page.locator('//a[text()="Add to cart"]').click()
    
    page.on('dialog', async dialog=>{

        await expect(dialog.message).toContain('Product added.')
        await dialog.accept()

    })

})