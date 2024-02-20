import {test,expect} from '@playwright/test'
//const {text,expect}=require('@playwright/test')

test.beforeEach('Login',async({page})=>{

    //To lauch the Webpage or Web application
    await page.goto('https://testautomationpractice.blogspot.com/')
    const HeadingText = page.locator('//h1[contains(text(),"Automation Testing Practice")]')
    await expect(HeadingText).toBeVisible()

})

test('Automation Testing Practice',async({page})=>{

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
     //await DropdownIcon .selectOption('India')
     // await page.selectOption('//select[@id="country"]','India') 
     

     //Assertation in Dropdown
     //(1)  check the number of option in dropdown [approach 1]// need to comment all above //not working
     //const options = await page.locator('#country option')
     //await expect(options).toHaveCount(10) 
     
     //(2) check the number of option in dropdown[approach 2]
     const options= await page.$$('#country option') //$$ reaturns in the array form
     console.log("Number of options",options.length)//checking the number of option
     await expect(options.length).toBe(10)

     //(3) to check the presence of some value(option) in dropdown [approach 1]
     const content =await page.locator('//select[@id="country"]').textContent()
     await expect(content.includes('India')).toBeTruthy()

     //(4) To check the Presence of some option or value in Dropdown by looping approach
     //store all options in a variable[approach 2]

     /*const optionss= await page.$$('#country option')
     let status =false

     for (const option of optionss )
     {
        console.log(await option.textContent())// To Print all the option in console window
         let value =await option.textContent()// store option in 'value' variavle 
        if (value.includes('France'))
        {
            status= true
            break
        }
        expect(status).toBeTruthy

     }*/
     //(5) select the  option from dropdown by using loop
     const optionss= await page.$$('#country option')
     

     for (const option of optionss )
     {
        console.log(await option.textContent())// To Print all the option in console window
         let value =await option.textContent()// store option in 'value' variavle 
        if (value.includes('France'))
        {
            await page.selectOption('#country',value)
            break
        }

     }

})
//How to handle multiple Dropdown
test('select multiple dropdown',async({page})=>{


    //To lauch the Webpage or Web application
    // await page.goto('https://testautomationpractice.blogspot.com/')
    // const HeadingText = page.locator('//h1[contains(text(),"Automation Testing Practice")]')
    // await expect(HeadingText).toBeVisible()

    await page.selectOption('#colors',['Red','Blue','Green'])

    //Assertation on multi  select dropdown
    //(1) check the number of option in dropown
     const multioptions=  await page.locator('#colors option')
      await expect(multioptions).toHaveCount(5)

      //(2) number of option in dropdown  using js array.
      const multioptionss =  await page.$$('#colors option')
      console.log(multioptionss)
      await expect(multioptionss.length).toBe(5) 
      

      //(3) to check the presence of some value in dropdown
       const dropdownvalue  =  await page.locator('#colors').textContent()
       await expect(dropdownvalue.includes('Red')).toBeTruthy()

    await page.waitForTimeout(4000)
})
 test('Bootstrap Dropdown',async({page})=>{

 })


