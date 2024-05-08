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

//await page.waitForTimeout(3000);


// await hp.clickOnSubTabOfMyInfo('Contact Details');

await hp.clickoncontactdetails();

await hp.FillDatainContactDetails();

await page.waitForTimeout(10000);







 











    

})