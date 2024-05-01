exports.MyInfoHRM=class MyInfoHRM
{
 constructor(page){

    this.page=page;
    this.myinfotab =`//span[text()="My Info"]`;
    this.alltabofmyinfo =`//div[@class="orangehrm-tabs-wrapper"]`;
    //this.menulist=`//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]`;
    


 }


 async clickMyInfo()
  {
    await this.page.locator(this.myinfotab).click();

  }

  async clickOnSubTabOfMyInfo(subtabname){

    const alltabofmyinfo =await this.page.$$(this.alltabofmyinfo);

    for(const tab of alltabofmyinfo)
    {
      if(subtabname===await subtabname.textContain())
      {
          await tab.click();
          break;
      }
        
        
    }

  }

  
}