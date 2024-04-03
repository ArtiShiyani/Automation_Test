import{test,expect} from '@playwright/test'

test('Handle Frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Total number of Frames
    const allframes = await page.frames()
    console.log('Number of frames',allframes.length)

    //approach 1 how to interact with the frames 1 ) by name 2) by URL

   // const framename =await page.frame('name') // if name is present in the frame
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill('//input[@name="mytext1"]','Arti')

    //apporoach 2 >using frame locator

    const frameA = await page.frameLocator('frame[src="frame_1.html"]').locator('//input[@name="mytext1"]')
    frameA.fill('Hello World !')





    await page.waitForTimeout(5000)



})