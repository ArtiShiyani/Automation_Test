import{test,expect} from'@playwright/test'

test('',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin123');
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    page.on('dialog',async dialog=>{

        expect(dialog.message()).toContain('Change your password');
        await dialog.accept();

    })

    //to click on 'PIM'

    await page.locator('//span[text()="PIM"]').click();

    //Click on dropdown icon
    await page.locator('(//div[@class="oxd-select-text--after"])[4]').click();
    //await page.locator("//i[@class='oxd-icon bi-caret-up-fill oxd-select-text--arrow']").click();

    const options= await page.$$('//div[@role="option"]//span');

    for(let option of options){

       const subunit = await option.textContent()

       if(subunit.includes('OrangeHRM')){

        await subunit.click();
        break;

       }

    }
    await page.waitForTimeout(5000);

})
