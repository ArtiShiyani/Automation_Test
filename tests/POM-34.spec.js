import{test,expect}from'@playwright/test'
import { LoginPage } from '../pages.js/Loginpage'
// POM >> page object module
// seperate the element and actions
// Keep the element and actions in differrnt file
// first create class for the page and constructor
//will create object of class.

test('Login test with POM ',async({page})=>{

    const login = new LoginPage(page);
     await login.gotoLoginPage();
     await login.login('employee','123');
     await page.waitForTimeout(5000)

})