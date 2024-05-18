import { LoginHRM } from "./LoginHRM";
import { MyInfoHRM } from "./MyInfoHRM";

exports.pimpagehrm=class pimpagehrm{

    constructor(page){

        this.page=page;
        this.addemp=`(//a[@class="oxd-topbar-body-nav-tab-item"])[2]`;
        this.firstname =`//input[@name="firstName"]`;
        this.middlename=`//input[@name="middleName"]`;
        this.lastname=`//input[@name="lastName"]`
    }


 async eddEmployee(){

    await this.page.Locator(this.addemp).click();
    await this.page.Locator(this.firstname).fill('Test1');
    await this.page.Locator(this.middlename).fill('Test2');
    await this.page.Locator(this.lastname).fill('Test3');
 }

}



    
