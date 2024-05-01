import{test,expect} from'@playwright/test'
import { LoginHRM } from '../pages.js/LoginHRM'
import { MyInfoHRM } from '../pages.js/MyInfoHRM';

test('HRM Test',async({page})=>{


//login

const loginhrm =new LoginHRM(page);

await loginhrm.visiturl();

await loginhrm.login();

//MyInfo

const hp=new MyInfoHRM(page)
await hp.clickMyInfo();

await page.waitForTimeout(5000);

await hp.clickOnSubTabOfMyInfo('Personal Details');
await hp.clickOnSubTabOfMyInfo('Contact Details');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');
// await hp.clickOnSubTabOfMyInfo('');

await page.waitForTimeout(5000);


 











    

})