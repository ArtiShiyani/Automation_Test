import{test,expect} from '@playwright/test'

test('Mouse Hover Action',async({page})=>{

    await page.goto('https://demo.opencart.com/')

    const components = await page.locator('(//a[@class="nav-link dropdown-toggle"])[3]')
    const moniter= await page.locator('//a[text()="Monitors (2)"]')

    //Hover Action

    await components.hover()
    await moniter.hover()

    await page.waitForTimeout(5000)


   const DropDown = await page.$$('//a[@class="nav-link"]')
   console.log(DropDown)


})