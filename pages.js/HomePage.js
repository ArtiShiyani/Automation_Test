exports.HomePage=
class HomePage{

    constructor(page){

        this.page= page
        this.productList= `//a[@class="hrefch"]`;
        this.addtocartbutton=`//a[text()="Add to cart"]`;
        this.cart=`#cartur`; 

    }

    async addProductToCart(productname){
        const productList = await this.page.$$(this.productList);

        for(const product of productList)
        {
            if(productname === await product.textContent())
            {
                await product.click();
                break;
            }
        }

        await this.page.on('dialog',async dialog=>{

            if(dialog.message().includes('added'))
            {
                await dialog.accept();
            }

        await this.page.locator(this.addtocartbutton).click(); 


        })

    }

    async GoToCart()
    {
        await this.page.locator(this.cart).click()
    }

   
}