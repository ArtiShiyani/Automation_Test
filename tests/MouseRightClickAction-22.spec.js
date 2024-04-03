 //const {test,expect} = require('@playwright/test')
 import { test,expect } from '@playwright/test'


 test('Mouse Right click action',async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

     const rightclickbutton = await page.locator('//span[@class="context-menu-one btn btn-neutral"]')

     //right click
     await rightclickbutton.click({rightclickbutton: 'right'})
     await page.waitForTimeout(5000)

 })