import{test,expect} from'@playwright/test'


test('Bootstrap  multi select Dropdown',async({page})=>{
     await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

     await page.locator(`//button[@class="multiselect dropdown-toggle btn btn-default"]`).click()

     //const Dropdownbutton = page.locator(`//button[@class="multiselect dropdown-toggle btn btn-default"]`)
     //await Dropdownbutton.click()

     // Assertion(1) 
       const dropdownoptions =  await page.locator('ul>li label input')
       await page.waitForTimeout(5000)
       await expect(dropdownoptions).toHaveCount(11)

      //  OR Assertion (2)
        const dropdownoptionss =  await page.$$('ul>li label input') //($$ need to use await )
        await page.waitForTimeout(5000)
        await expect(dropdownoptionss.length).toBe(11)

        //how to select multiple option from dropdown
         const doptions= await page.$$('ul>li label input')
         console.log("The options is",doptions)

         for(let option of doptions)
         {
               //await option.innerText()
              const value = await option.textContent()
              console.log("The value is ",value)

              if (value.includes('Angular')|| value.includes('Java'))
              {
               await option.click()

              }
         }
          // to deselct
          for(let option of doptions)
         {
               //await option.innerText()
              const value = await option.textContent()
              console.log("The value is ",value)

              if (value.includes('HTML')|| value.includes('CSS'))
              {
               await option.click()
              }
               
         }   

})