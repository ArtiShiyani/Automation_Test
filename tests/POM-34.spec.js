import{test,expect}from'@playwright/test'
import { LoginPage } from '../pages.js/Loginpage'
import { HomePage } from '../pages.js/HomePage';
import { CartPage } from '../pages.js/CartPage';
// POM >> page object module
// seperate the element and actions
// Keep the element and actions in differrnt file
// first create class for the page and constructor
//will create object of class.

//

test('POM ',async({page})=>{
    

    //Login

    const login = new LoginPage(page);
     await login.gotoLoginPage();
     await login.login('employee','123');
     await page.waitForTimeout(5000)


     //Home

     const home =new HomePage(page)
     await home.addProductToCart('Samsung galaxy s6');
     await page.waitForTimeout(11000);
     await home.GoToCart();

     //cart

    const cart = new CartPage(page)
    await page.waitForTimeout(11000)
    const status =await cart.checkProductInCart('Samsung galaxy s6');
    expect(status).toBe(true);


})