exports.CartPage=
class CartPage{

    constructor(page){

        this.page= page;
        this.numberOfProduct =`//tbody[@id="tbodyid"]/tr/td[2]`;

    }

    async checkProductInCart(page,productname)
    {
        const productInCart = await page.$$(this.numberOfProduct);

        for(const product of  productInCart)
        {
         console.log(await product.textContent())

         if (productname===await product.textContent())
         {
            return true;
            break;
         }
        }
    }

}