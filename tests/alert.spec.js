//import{test,expect} from '@playwright/test'
const {test,expect}=require('@playwright/test')

test.skip('Alert with ok',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //need to put the dialog window handler before clicking on any dilaog (alert, confirm,prompt)
    //Enable alert handling or dialog window handler

    page.on('dialog', async dialog=>{

        //validation
        
         expect (dialog.type()).toContain('alert')
         expect (dialog.message()).toContain('I am an alert box!')
         await dialog.accept()  // >>>to close the dialog.

    })

    await page.locator('//button[text()="Alert"]').click
    await page.waitForTimeout(5000)
})

test.skip('Conformation dialog windoe with ok and cancel button',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //need to put the dialog window handler before clicking on any dilaog (alert, confirm,prompt)
    //Enable alert handling or dialog window handler

    page.on('dialog', async dialog=>{

        //validation
        
         expect (dialog.type()).toContain('confirm')
         expect (dialog.message()).toContain('Press a button!')
         //await dialog.accept()  // >>>to close the dialog by using "OK" button
         await dialog.dismiss() //>> To close the dialog by using the "cancel" button

    })

    await page.click('//button[text()="Confirm Box"]')
    const txt1 = page.locator('//p[text()="You pressed Cancel!"]')
    //const txt2 = page.locator('//p[text()="You pressed OK!"]')
    await expect(txt1).toBeVisible()
    //await expect(txt2).toBeVisible()


    //another way to validate the text after clicking the button ok /cancel
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000)
})

test('Promt dialog window',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //need to put the dialog window handler before clicking on any dilaog (alert, confirm,prompt)
    //Enable alert handling or dialog window handler

    page.on('dialog', async dialog=>{

        //validation
        
         expect (dialog.type()).toContain('prompt')
         expect (dialog.message()).toContain('Please enter your name:')
         expect (dialog.defaultValue()).toContain('Harry Potter')

         await dialog.accept('new employee') //>at the time of closing windoe we need to enter value in input box>> to close by using the "OK" 
         //await dialog.dismiss()// >> to close by using the "cancel"

    })

    await page.click('//button[text()="Prompt"]')
    const txt = page.locator('//p[@id="demo"]')
    //await expect(txt).toHaveText('Hello Harry Potter! How are you today?')// verify text when click "ok"
    await expect(txt).toHaveText('Hello new employee! How are you today?')

    //await expect(txt).toHaveText('User cancelled the prompt')// verify text when clicked "canceled"

   
})