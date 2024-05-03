import{test,expect} from'@playwright/test'
import { LoginHRM } from '../pages.js/LoginHRM'
import { MyInfoHRM } from '../pages.js/MyInfoHRM'

test('HRM Test',async({page})=>{


//login

const loginhrm =new LoginHRM(page);

await loginhrm.visiturl();

await loginhrm.login();


//MyInfo


const hp=new MyInfoHRM(page)
await hp.clickOnSearchedTab('My Info');

await page.waitForTimeout(3000);
await page.pause();

await hp.clickOnSubTabOfMyInfo('Emergency Contacts');

await page.waitForTimeout(10000);





 











    

})