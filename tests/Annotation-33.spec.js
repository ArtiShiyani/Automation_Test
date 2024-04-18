import{test,expect} from'@playwright/test'

//Annotations are >> skip, only, fail, fixme >>Multiple times 
//fixme () almost work like skip() , used when any test has open issue
//Annotations comes first  in script then scripts starts.

test.skip('Annotations in playwright1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
})

test.only('Annotations in playwright2',async({page})=>{

    await page.goto('https://www.opencart.com/index.php?route=account/login')
})

//Condition  based skip
test('Annotations in playwright3',async({page,browserName})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    if(browserName==='firefox')
    {   
        test.skip()
    }
})
//fixme()
test('Annotations in playwright2',async({page})=>{

    await page.goto('https://www.opencart.com/index.php?route=account/login')
    test.fixme()
})

//fail() >> exp and actual miss match >> test passes.
test('',async()=>{

    test.fail() //Exp
    console.log('this is Test block')
    expect(1).toBe(1) //Actual 
    
})

