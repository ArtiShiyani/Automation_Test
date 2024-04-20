import{test,expect} from'@playwright/test'

//Annotations are >> skip, only, fail, fixme, slow >>Multiple times 
//fixme () almost work like skip() , used when any test has open issue
//Annotations comes first  in script then scripts starts.

test('Annotations in playwright1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('Annotations in playwright2',async({page})=>{

    await page.goto('https://www.opencart.com/index.php?route=account/login')
})

//Condition  based skip
test('Annotations in playwright3',async({page,browserName})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    if(browserName==='chromium')
    {   
        test.skip()
    }
})
//fixme()
test('Annotations in playwright',async({page})=>{

    await page.goto('https://www.opencart.com/index.php?route=account/login')
    test.fixme()
})

//fail() >> exp and actual miss match >> test passes.
test('Fail() in playwright',async({page})=>{

    test.fail() //Exp
    console.log('this is Test block')
    expect(1).toBe(2) //Actual 
    
})
//condition based fail
test('Condition based fail()',async({page,browserName})=>{

    if(browserName==='chromium')
    {
        test.fail()
    }
    console.log('This is condition based fail() annotation')
})
 
//Slow () annotation >> timeout *3

test('Slow() annotation in playwright',async({page})=>{

    //test.slow()
    test.setTimeout(5000)
    await page.goto('https://testautomationpractice.blogspot.com/')

})

