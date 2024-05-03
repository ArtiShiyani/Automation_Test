const { expect } = require("@playwright/test");

exports.MyInfoHRM=class MyInfoHRM
{
 constructor(page){

    this.page=page;
    this.myinfotab =`//span[text()="My Info"]`;
    this.searchbox=`//input[@placeholder="Search"]`;
    this.searchedtab =`//li[@class="oxd-main-menu-item-wrapper"]`;
    this.subtabofmyinfo=`//div[@class="orangehrm-tabs"]`;
   
    
    

 }



//To  enter tab name and clicked on that

  async clickOnSearchedTab(tabname)
  {
    await this.page.locator(this.searchbox).fill(tabname);
    const searchedTab = await this.page.locator(this.searchedtab);
    await expect(searchedTab).toContainText(tabname);
    await searchedTab.first().click();
    

  }
//To click on subtab of Myinfo page

  async clickOnSubTabOfMyInfo(subtabname){

    const SubTab =await this.page.$$(this.subtabofmyinfo);

    for(const tab of SubTab)
    {
      //await tab.click(); // To click on each tab & no parameterized
      //await page.waitForTimeout(1000);

      const tabText = await tab.textContent(); //Get the text content of the tab

      if (tabText.includes(subtabname)) //Check if the tab text contains the desired subtabname
      {
        await tab.click();
        break;
      }
         
    }

  }

  
}