const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get SauceLabsBackpackInventoryImage() {
        return $('#item_4_title_link')
    }

    get SauceLabsBackpackAddToCartImageBttn() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get ProductSort() {
        return $('#product_sort_container')
    }

    get HILO() {
        return $('#hilo')
    }

    get InventoryPrice() {
        return $('#inventory_item_price')
    }
    

    get ShoppingCartIcon() {
        return $('#shopping_cart_container')
    }

  
}

module.exports = new InventoryPage();
