import{test, expect} from '@playwright/test'

//Ref >>https://playwright.dev/docs/api/class-keyboard

test('Keyboard Actions in Playwright',async({page})=>{

await page.goto('https://gotranscript.com/text-compare')

await page.locator('//textarea[@name="text1"]').fill('Welcome to automation')



//Ctrl+A -- select the text
// keyboard.paress >> Combination of two or more keys

await page.keyboard.press('Control+A')

//Ctrl+C -- Copy tehe text

await page.keyboard.press('Control+C')

//Tab 
//down and up >> will do the Release action.

await page.keyboard.down('Tab')
await page.keyboard.up('Tab')


//Ctrl+V
await page.keyboard.press('Control+V')


})
