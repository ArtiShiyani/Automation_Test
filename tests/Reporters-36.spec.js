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