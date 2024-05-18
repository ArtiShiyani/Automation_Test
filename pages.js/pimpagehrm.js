//import { LoginHRM } from "./LoginHRM";
//import { MyInfoHRM } from "./MyInfoHRM";
const { expect } = require("@playwright/test");


exports.pimpagehrm=class pimpagehrm{

    constructor(page){

        this.page=page;
        this.searchbox=`//input[@placeholder="Search"]`;
        this.searchedtab =`//li[@class="oxd-main-menu-item-wrapper"]`;
        this.addemp=`(//a[@class="oxd-topbar-body-nav-tab-item"])[2]`;
        this.firstname =`//input[@name="firstName"]`;
        this.middlename=`//input[@name="middleName"]`;
        this.lastname=`//input[@name="lastName"]`
    }


 //To  enter tab name and clicked on that

 async clickOnSearchedTab(tabname)
 {
   await this.page.locator(this.searchbox).fill(tabname);
   const searchedTab = await this.page.locator(this.searchedtab);
   await expect(searchedTab).toContainText(tabname);
   await searchedTab.first().click();
   
 }   


 async addEmployee(){

    await this.page.Locator(this.addemp).click();
    await this.page.Locator(this.firstname).fill('Test1');
    await this.page.Locator(this.middlename).fill('Test2');
    await this.page.Locator(this.lastname).fill('Test3');
 }

}



    
