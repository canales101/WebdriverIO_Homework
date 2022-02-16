const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const Shopping_Cart_Page = require('../pageobjects/Shopping_Cart.page');


describe('Sauce Demo Standard User', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.secondaryTitle).toHaveTextContaining('PRODUCTS');
    });
});

describe('Sauce Demo Locked Out User', () => {
        it('should login with valid credentials For Locked Out User', async () => {
        await LoginPage.open();
    
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await (LoginPage.btnSubmit).isDisplayed();
        await (LoginPage.btnSubmit).isClickable();
    });
});

describe('Add Sauce Labs Backpack To Shopping Cart using Add to Cart Button', () => {
    it('Backpack Should Display In Cart Page', async () => {
    await LoginPage.open();
    
    await LoginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.SauceLabsBackpackAddToCartImageBttn.click();
    await inventoryPage.ShoppingCartIcon.click();
    await expect(InventoryPage.secondaryTitle).toHaveTextContaining('YOUR CART');
    });
});
  

describe('Add Sauce Labs Backpack To Shopping Cart using inventory image', () => {
    it('Backpack Should Display In Cart Page', async () => {
    await LoginPage.open();
    
    await LoginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.SauceLabsBackpackInventoryImage.click();
//seems to click on the add to cart automatically when using automation when clicking the item image. need to find out why it is doing that. does not behave that way manually.
    await inventoryPage.ShoppingCartIcon.click();
    await expect(InventoryPage.secondaryTitle).toHaveTextContaining('YOUR CART');
    });
  });

describe('Sort Items from High To Low In Inventory Page', () => {
    it('Backpack Should Display In Cart Page', async () => {
    await LoginPage.open();
    
    await LoginPage.login('standard_user', 'secret_sauce');
    it('Should demonstrate the selectByIndex command', async () => {
        const selectBox = await $(ProductSort);
        console.log(await selectBox.getValue()); // returns "Name (A to Z)"
        await selectBox.selectByIndex(3);
        console.log(await selectBox.getValue()); // returns "Price (high to low)"
        await expect(InventoryPage.HILOHILO).isDisplayed();
        console.log("Price High To Low is displayed in the Drop Box")

        await expect(InventoryPage.InventoryPrice).toBeGreaterThanOrEqual("$49.99");
    });
  });
});








