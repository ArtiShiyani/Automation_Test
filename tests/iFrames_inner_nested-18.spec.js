import{test,expect} from '@playwright/test'

test('Handle Frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator('//input[@name="mytext3"]').fill('Welcome')

    //nested frame (frame3 is parent frame)
    const childframe = await frame3.childFrames()
     await childframe[0].locator('(//div[@class="AB7Lab Id5V1"])[1]').check()


})   

    