import{test,expect} from '@playwright/test'

test('Drag and Drop',async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    //Drag and Drop >> approach 1
    // 1. source and target element 
    //2. mouse hover and  click , mouse hover and release action 

    const source = await page.locator('//div[@id="box3"]')
    const target = await page.locator('//div[@id="box103"]')
    
    await source.hover()
    await page.mouse.down() //Drag

    await target.hover()
    await page.mouse.up()// Drop

    // apporach 2  >> direct method 

    await source.dragTo(target)

    await page.waitForTimeout(7000)


})