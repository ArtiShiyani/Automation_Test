import{test,expect} from'@playwright/test'
import { LoginHRM } from '../pages.js/LoginHRM'
import { MyInfoHRM } from '../pages.js/MyInfoHRM'
import{ pimpagehrm} from '../pages.js/MyInfoHRM'
import { addAbortListener } from 'events';

let page;

test.beforeAll(async({browser})=>{
//login

page= await browser.newPage()

const loginhrm =new LoginHRM(page);

await loginhrm.visiturl();

await loginhrm.login();

})

test.afterAll(async({browser})=>{

    const loginhrm =new LoginHRM(page);
    //Logout
    await loginhrm.logout();
})

test('HRM Test1',async()=>{

//MyInfo

const hp=new MyInfoHRM(page) //New object

await hp.clickOnSearchedTab('My Info');

await page.waitForTimeout(3000);

//await hp.clickOnSubTabOfMyInfo('Contact Details');

await hp.clickoncontactdetails();

await hp.FillDatainContactDetails();

await hp.clickonpersonalDetails();

await hp.filldetainpersonaldetails();

//await hp.addattachment();

//await hp.editattachmnet();

//await hp.downloadfile();

//await hp.deleteattachment();

})

test('HRM Test 2',async()=>{

// PIM
const pim =new pimpagehrm(page)

await pim.eddEmployee();


})

