const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Shopping_Cart_Page extends Page {
    /**
     * define selectors using getter methods
     */
    get CartPageTitle() {
        return $('#title')
    }
}

module.exports = new Shopping_Cart_Page();
