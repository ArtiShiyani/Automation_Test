import {test,expect} from '@playwright/test'
//const {text,expect}=require('@playwright/test')

test('Automation Testing Practice',async({page})=>{

    //To lauch the Webpage or Web application
    await page.goto('https://testautomationpractice.blogspot.com/')
    const HeadingText = page.locator('//h1[contains(text(),"Automation Testing Practice")]')
    await expect(HeadingText).toBeVisible()
    
    //Login(Inputbox,Textbox)

    const Name = page.locator('//input[@id="name"]')
    await expect(Name).toBeEmpty()
    await expect(Name).toBeEnabled()
    await expect(Name).toBeEditable()
    await Name.click()
    await Name.fill('Test123')

    const Email = page.locator('//input[@id="email"]')
    await expect(Email).toBeEmpty()
    await expect(Email).toBeEnabled()
    await expect(Email).toBeEditable()
    await Email.click()
    await Email.fill('Test123@mailinator.com')

    const Phone= page.locator('//input[@id="phone"]')
    await expect(Phone).toBeEmpty()
    await expect(Phone).toBeEnabled()
    await expect(Phone).toBeEditable()
    await Phone.click()
    await Phone.fill('123456789')

    const Address= page.locator('//textarea[@id="textarea"]')
    await expect(Address).toBeEmpty
    await expect(Address).toBeEnabled()
    await expect(Address).toBeEditable()
    await Address.click()
    await Address.fill('This is Testing purpose')



    //Radio button

    const Male = page.locator('//input[@class="form-check-input" and @id="male"]')
    const Female = page.locator('//input[@class="form-check-input" and @id="female"]')
    await Female.check()
    await expect(Female).toBeChecked()
    await expect(Female.isChecked).toBeTruthy()

    //singl Checkbox
    const Sunday = page.locator('//input[@class="form-check-input" and @id="sunday"]')
    await Sunday.check()
    await expect (Sunday).toBeChecked()

    //Multiple Checkbox check and uncheck

    const Days =['//input[@class="form-check-input" and @id="sunday"]',
                 '//input[@class="form-check-input" and @id="monday"]',
                 '//input[@class="form-check-input" and @id="tuesday"]',
                 '//input[@class="form-check-input" and @id="wednesday"]',
                 '//input[@class="form-check-input" and @id="thursday"]',
                 '//input[@class="form-check-input" and @id="friday"]',
                 '//input[@class="form-check-input" and @id="saturday"]'

    ]
    //to check multiple checkbox
    for(const locator of Days)
    {
        await page.locator(locator).check()
    }

    //To Uncheck multiple checkbox
    for(const locator of Days)
    {
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck()
        }

    }

    //Dropdown menu//Multiple approach
     const DropdownIcon = page.locator('//select[@id="country"]')
     await DropdownIcon.click()
     //await DropdownIcon .selectOption({lable:'India'})
     //await DropdownIcon .selectOption({value:'india'})
     //await DropdownIcon .selectOption({index:'1'})
     await DropdownIcon .selectOption('India')
     //page.selectOption('//select[@id="country"]','India') 

})


