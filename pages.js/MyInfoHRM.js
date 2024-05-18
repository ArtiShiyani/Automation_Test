const { expect } = require("@playwright/test");

exports.MyInfoHRM=class MyInfoHRM
{
 constructor(page){

    this.page=page;
    this.myinfotab =`//span[text()="My Info"]`;
    this.searchbox=`//input[@placeholder="Search"]`;
    this.searchedtab =`//li[@class="oxd-main-menu-item-wrapper"]`;
    this.subtabofmyinfo=`//div[@role="tablist"]//div`;
    this.contactdetails =`//a[text()="Contact Details"]`;
    this.street1 =`(//input[@class="oxd-input oxd-input--active"])[2]`;
    this.street2=`(//input[@class="oxd-input oxd-input--active"])[3]`;
    this.city =`(//input[@class="oxd-input oxd-input--active"])[4]`;
    this.state =`(//input[@class="oxd-input oxd-input--active"])[5]`;
    this.zip =`(//input[@class="oxd-input oxd-input--active"])[6]`;
    this.home =`(//input[@class="oxd-input oxd-input--active"])[7]`;
    this.mobile =`(//input[@class="oxd-input oxd-input--active"])[8]`;
    this.work =`(//input[@class="oxd-input oxd-input--active"])[9]`;
    this.workemail =`(//input[@class="oxd-input oxd-input--active"])[10]`;
    this.otheremail =`(//input[@class="oxd-input oxd-input--active"])[11]`;
    this.countryDropdownicon =`//div[@class="oxd-select-text--after"]`;
    this.countrylist =`//div[@role="option"]//span`;
    this.save =`//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]`
    this.personaldetails =`//a[text()="Personal Details"]`;
    this.firstname=`//input[@placeholder="First Name"]`;
    this.middlename=`//input[@placeholder="Middle Name"]`;
    this.lastname =`//input[@placeholder="Last Name"]`;
    this.employeeid =`(//input[@class="oxd-input oxd-input--active"])[2]`;
    this.otherid =`(//input[@class="oxd-input oxd-input--active"])[3]`;
    this.driverLianceNumber =`(//input[@class="oxd-input oxd-input--active"])[4]`;
    this.lianceExpiryDate=`(//input[@class="oxd-input oxd-input--active"])[5]`;
    this.dob =`(//input[@class="oxd-input oxd-input--active"])[6]`;
    this.male=`//input[@value="1"]`;
    this.female=`//input[@value="2"]`;
    this.nationalitydropdownicon =`(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[1]`;
    this.nationalityList=`//div[@role="option"]//span`;
    this.maritalstatusdropdownicon =`(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[2]`;
    this.maritalstatusList =`//div[@role="option"]//span`;
    this.personaldetailssavebutton =`(//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"])[1]`;
    this.bloodgroupdropdownicon =`(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[3]`;
    this.bloodgrplist=`//div[@role="option"]//span`;
    this.customfieldssavebutton=`(//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"])[2]`;
    this.addbutton =`//button[@class="oxd-button oxd-button--medium oxd-button--text"]`;
    this.browse =`//div[@class="oxd-file-button"]`;
    this.comment =`//textarea[@placeholder="Type comment here"]`;
    this.attachmentsavebutton=`(//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"])[3]`;
    this.editicon =`(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[1]`;
    this.deleteicon=`(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[2]`;
    this.downloadicon =`(//button[@class="oxd-icon-button oxd-table-cell-action-space"])[3]`;
    this.yesdeleteicon =`//button[@class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]`;

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

 /*async clickOnSubTabOfMyInfo(subtabname){

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
  }*/

  async clickoncontactdetails(){

      await this.page.locator(this.contactdetails).click();
  }

async FillDatainContactDetails()
{

  await this.page.locator(this.street1).fill('Test 1');
  await this.page.locator(this.street2).fill('Test 2');
  await this.page.locator(this.city).fill('New York');
  await this.page.locator(this.state).fill('U.S');
  await this.page.locator(this.zip).fill('12345');
  await this.page.locator(this.home).fill('102');
  await this.page.locator(this.mobile).fill('112-898-7612');
  //await this.page.locator(this.work).fill('112-898-7612');
  //await this.page.locator(this.workemail).fill('arti@yopmail.com');
  //await this.page.locator(this.otheremail).fill('admin@example.com');

  //Dropdown of country

  await this.page.locator(this.countryDropdownicon).click()

   const allcountries =await this.page.$$(this.countrylist);

  for (let opntion of allcountries){

    const countrytext =await opntion.textContent()

    if(countrytext.includes('Albania')){

      await opntion.click()
    }
  }
await this.page.locator(this.save).click();

}

async clickonpersonalDetails(){

   await this.page.locator(this.personaldetails).click();
}

async filldetainpersonaldetails(){

  await this.page.locator(this.firstname).fill('Shiyani');
  await this.page.locator(this.middlename).fill('Arti');
  await this.page.locator(this.lastname).fill('V');
  await this.page.locator(this.employeeid).fill('muser');
  await this.page.locator(this.otherid).fill('4957589');
  //await this.page.locator(this.driverLianceNumber).fill('56788');
  //await this.page.locator(this.lianceExpiryDate).fill('2025-12-12');
  await this.page.locator(this.dob).fill('1993-09-07');
  //await this.page.locator(this.female).click();

  //Dropdown of nationality 
  
  await this.page.locator(this.nationalitydropdownicon).click()

  const nationalityoptions = await this.page.$$(this.nationalityList);

  for(const option of nationalityoptions){

    const nationalitylist =await option.textContent();

    if(nationalitylist.includes('Albanian')){

      await option.click();

      break;
    }

  }

 //Dropdown of marital status 
 
 await this.page.locator(this.maritalstatusdropdownicon).click()

  const maritaloptions = await this.page.$$(this.maritalstatusList);

  for(const option of maritaloptions){

    const nationalitylist =await option.textContent();

    if(nationalitylist.includes('Single')){

      await option.click();

      break;
    }

  }

  await this.page.locator(this.personaldetailssavebutton).click()


  //Dropdown of blood group

  await this.page.locator(this.bloodgroupdropdownicon).click()

  const bloodGroupOptions =await this.page.$$(this.bloodgrplist);

  for(const option of bloodGroupOptions){

     const bloodType =await option.textContent();

     if(bloodType.includes('O-')){
      await option.click();
      break;
     }

  }
  await this.page.locator(this.customfieldssavebutton).click();
}

async addattachment(){
  
  //Clik on "+add" button
  this.page.locator(this.addbutton).click();

  // Locate the input file element and ensure it's the correct one
  const fileInput = await this.page.locator(this.browse);

  // Verify that the located element is indeed an input element
  const isInputElement = await fileInput.evaluate(node => node instanceof HTMLInputElement);
  if (!isInputElement) {
      throw new Error('The locator for the file input does not point to an HTMLInputElement');
  }

  // Set input files
  await fileInput.setInputFiles('tests/UploadFiles/Template Test Plan.xlsx');
  
  //this.page.locator(this.browse).setInputFiles('tests\UploadFiles\Template Test Plan.xlsx');
  this.page.locator(this.comment).fill('File uploaded'); //Fill the comment field
  this.page.locator(this.attachmentsavebutton).click();// Click the save button

  

}

async editattachmnet(){

  this.page.locator(this.editicon).click();
  this.page.waitforSelector(this.browse);
  this.page.locator(this.browse).setInputFiles('tests\UploadFiles\Template Test Plan.xlsx');
  this.page.locator(this.comment).fill('File uploaded');
  this.page.locator(this.attachmentsavebutton).click();


}

async downloadfile(){

  await this.page.locator(this.downloadicon).click();
  
}

async deleteattachment(){

  await this.page.locator(this.deleteicon).click();
  await this.page.lastname(this.yesdeleteicon).click();

}

}
