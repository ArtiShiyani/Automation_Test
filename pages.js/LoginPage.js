

exports.LoginPage=class LoginPage{

    constructor(page)
    {
            this.page=page;
            this.loginlink= `//a[@id="login2"]`;
            this.UserName= `//input[@id="loginusername"]`;
            this.PassWord=`//input[@id="loginpassword"]`;
            this.loginButton=`(//button[@class="btn btn-primary"])[3]`;
            
    }

    //Method for go to login page
    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/');
    }

    //method for login
    async login(username, password){

        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.UserName).fill(username);
        await this.page.locator(this.PassWord).fill(password);
        await this.page.locator(this.loginButton).click();
    }
    
}