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
        this.lastname=`//input[@name="lastName"]`;
        this.save=`//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]`;
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

    await this.page.locator(this.addemp).click();
    await this.page.locator(this.firstname).fill('Test1');
    await this.page.locator(this.middlename).fill('Test2');
    await this.page.locator(this.lastname).fill('Test3');
    await this.page.locator(this.save).click();

 }

}



    
