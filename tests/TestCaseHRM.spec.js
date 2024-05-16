import{test,expect} from'@playwright/test'
import { LoginHRM } from '../pages.js/LoginHRM'
import { MyInfoHRM } from '../pages.js/MyInfoHRM'
import { addAbortListener } from 'events';

test('HRM Test1',async({page})=>{

//login

const loginhrm =new LoginHRM(page);

await loginhrm.visiturl();

await loginhrm.login();


//MyInfo


const hp=new MyInfoHRM(page)
await hp.clickOnSearchedTab('My Info');

await page.waitForTimeout(3000);


//await hp.clickOnSubTabOfMyInfo('Contact Details');

await hp.clickoncontactdetails();

await hp.FillDatainContactDetails();

await hp.clickonpersonalDetails();

await hp.filldetainpersonaldetails();

await hp.addattachment();

await hp.editattachmnet();

await hp.downloadfile();

await hp.deleteattachment();



//Logout

await loginhrm.logout();

})