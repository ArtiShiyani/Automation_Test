exports.LoginHRM=
class LoginHRM
{
    constructor(page)
    {

        this.page=page;
        this.username =`//input[@name="username"]`;
        this.password=`//input[@name="password"]`;
        this.loginbutton=`//button[text()=" Login "]`;

        this.profileicon =`//li[@class="oxd-userdropdown"]` ;  //p[@class="oxd-userdropdown-name"]
        this.logoutbutton =`//a[contains(text(),"Logout")]`;

    }

    async visiturl(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    }

    async login()
    {
        await this.page.locator(this.username).fill('Admin');
        await this.page.locator(this.password).fill('admin123');
        await this.page.locator(this.loginbutton).click();



        await this.page.on('dialog',async dialog=>
        {

            if(dialog.message().includes('Change your password'))
            {
                await dialog.accept();
            }

        })
    }

    // async login(UserName,PassWord) //parameterized
    // {
    //     await this.page.locator(this.username).fill(UserName);
    //     await this.page.locator(this.password).fill(PassWord);
    //     await this.page.locator(this.loginbutton).click();
    // } 

    async logout()
    {
        await this.page.locator(this.profileicon).click();
        await this.page.locator(this.logoutbutton).click()
    }
}