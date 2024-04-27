/*1.Add number of retries in 'config' file. or 
2.# Give failing tests 3 retry attempts
npx playwright test --retries=3
*/

import{test,expect}from'@playwright/test'
import { LoginPage } from '../pages.js/Loginpage'
import { HomePage } from '../pages.js/HomePage';
import { CartPage } from '../pages.js/CartPage';


// test('POM ',async({page})=>{
    

//     //Login

//     const login = new LoginPage(page);
//      await login.gotoLoginPage();
//      await login.login('employee','123');
//      await page.waitForTimeout(5000)


//      //Home

//      const home =new HomePage(page)
//      await home.addProductToCart('Samsung galaxy s6');
//      await page.waitForTimeout(35000);
//      await home.GoToCart();


//      //cart

//     const cart = new CartPage(page)
//     await page.waitForTimeout(35000)
//     const status =await cart.checkProductInCart('Samsung galaxy s6');
//     expect(status).toBe(false);


// })

test('Retries Failed TC',async({page})=>{

    await page.goto('https://demoblaze.com/');
})
