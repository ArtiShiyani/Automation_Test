import{test,expect} from '@playwright/test'

// const { chromium } = require('playwright');

// (async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     // Now you can use 'page' object
// })();


//Ref >>https://playwright.dev/docs/input#upload-files

test.skip('single File upload',async ({page})=>{

    await page.goto('https://www.foundit.in/')

    await page.waitForSelector('.mqfihd-upload')

    await page.locator('.mqfihd-upload').click()


    //await page.locator().setInputFiles('Relative path')
    await page.locator('#file-upload').setInputFiles('tests\UploadFiles\Template Test Plan.xlsx')
    
    await page.waitForTimeout(5000)
})

test('Multiple File Upload',async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    //await page.locator('//input[@name="filesToUpload"]').click()


    //await page.locator().setInputFiles([Relative path File 1, Relative path file 2..]) >> need to inset form of array
    await page.locator('//input[@name="filesToUpload"]').setInputFiles(['tests\UploadFiles\Template Test Plan.xlsx','tests\UploadFiles\Template Test Plan - Copy.xlsx'])

    await page.waitForTimeout(5000)

    //Assertation
     expect(await page.locator('(//ul[@id="fileList"]/child::li)[1]')).toHaveText('Template Test Plan - Copy.xlsx')
     expect(await page.locator('(//ul[@id="fileList"]/child::li)[2]')).toHaveText('Template Test Plan.xlsx')

     await page.waitForTimeout(5000)

     //To Remove the Files >>need to pass the empty array
     await page.locator('//input[@name="filesToUpload"]').setInputFiles([])

    expect(await page.locator('//li[text()="No Files Selected"]')).toHaveText('No Files Selected')

    await page.waitForTimeout(5000)

})