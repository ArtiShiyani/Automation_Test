/* Step for Allure report :
 1. Install allure reports by using below command
    npm i -D @playwright/test allure-playwright
 2.Install Allure command line by below command
    npm install -g allure-commandline --save-dev (or)
    sudo npm install -g allure-commandline --save-dev
    ref : https://www.npmjs.com/package/allure-commandline
3. open 'playwright.config' file.
    reporter: "allure-playwright";

    npx playwright --reporter=allure-playwright 
4. Run the Test
    npx playwright test filename
5.Generate Allure Report:

    allure generate my-allure-results -o allure-report --clean
6. Open Allure Report:

    allure open allure-report

  */
    import{test,expect} from'@playwright/test'

    test('Test 1',async({page})=>{
    
        await page.goto ('https://demoblaze.com/');
        await expect(page).toHaveTitle('STORE');
    
    })
    
    test('Test 2',async({page})=>{
    
        await page.goto ('https://demo.opencart.com/');
        await expect(page).toHaveTitle('Your Store');
    
    })
    
    test('Test 3',async({page})=>{
    
        await page.goto ('https://demo.nopcommerce.com/');
        await expect(page).toHaveTitle('nopCommerce demo store');
    
    })