import{test, expect} from '@playwright/test'

test('Handling table',async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')

    //await page.pause()

    // 1)extract total num of rows and columns

    //const table = await page.locator('//table[@id="productTable"]')
    const table = await page.locator('#productTable')

    await page.waitForSelector('thead tr th'); //ChatGPT 

    const columns = await table.locator('thead tr th') // Returns all the table heading also known has coumns
    console.log("Number of column:", await columns.count()) // Returns total num of columns
    expect(await columns.count()).toBe(4) // Validation

   const rows = await table.locator('tbody tr') // Returns all the row 
   console.log("Number of Rows :", await rows.count()) // Returns the row
   expect(await rows.count()).toBe(5)// Validation


   //2) select the check box of product 4

    /*const matchedrows= rows.filter({
    has : page.locator('td'),
    hasText: 'Product 4'
   })    
   await matchedrows.locator('input').check()
   */

   await page.waitForTimeout(5000)


//3) Re-usable function

await selectproduct(rows,page, 'Product 1')
await selectproduct(rows,page, 'Product 3')
await selectproduct(rows,page, 'Product 5')

//4) print all the product details using the loop

for (let i=0; i< await rows.count();i++)
{

  const row =rows.nth(i)
  const tds =row.locator('td')


   for (let j=0;j<await tds.count()-1;j++)
   {
        console.log(await tds.nth(j).textContent())
   } 

} 

   //5 Pagination
     const pages = await page.locator('.pagination li a')

     console.log("Number of pages",await pages.count())

     for(let p =0;p<await pages.count();p++)
     {

      if(p>0)
      {
        await pages.nth(p).click()
      }

    for (let i=0; i< await rows.count();i++)
    {

      const row =rows.nth(i)
      const tds =row.locator('td')

      for (let j=0;j<await tds.count()-1;j++)
      {
          console.log(await tds.nth(j).textContent())
      } 

    }  
      await page.waitForTimeout(3000)

     }

     await page.waitForTimeout(3000)

})
 async function selectproduct(rows,page, name){

    const matchedrows= rows.filter({
    has : page.locator('td'),
    hasText: name
   })    
   await matchedrows.locator('input').check()
}