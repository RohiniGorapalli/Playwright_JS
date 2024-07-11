//a[@id="passkeys-cancel-btn"]

const { executeStep } = require("../utilities/actions");
require("dotenv").config();
const {Data} = require("../data.json");
class ItemsPage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
   
    this.fashionBtn = page.locator("(//a[text()='Fashion'])[2]"); 
    this.watchesOption = page.locator("//a[text()='Watches']");
    this.inputSearch = page.locator("//input[@id='gh-ac']");
    this.rolexSearchBtn = page.locator("//td[@class='gh-td gh-sch-btn']");
    this.butItNow = page.locator("(//li[@class='fake-tabs__item btn'])[2]");
    this.heartSymbol = page.locator("//span[@class='follow-heart-wrapper heartIcon ']");
    this.shopOnEbayStore = page.locator("//div[@class='pd-cta-icon']");
    //this.checkAlert = page.locator("//div[@id='ebayin-sunset']");
  }  
 
  clickingOnFashionButton = async () => {
    await executeStep(this.test,this.fashionBtn,"click",`hovering on fashion option`);
    await this.page.waitForTimeout(3000);
    await executeStep(this.test,this.watchesOption,"click",`clicking on watches option`);
  };
  clickingOnSearchButton = async () => {
    await executeStep(this.test,this.inputSearch,"click",`clicking on inputSearch button`);
    await executeStep(this.test,this.inputSearch,"fill",`filling inputSearch  feild:${process.env.inputSearchFill}`,[process.env.inputSearchFill]);
    await executeStep(this.test,this.rolexSearchBtn,"click",`clicking on rolexSearchBtn button`);
    await executeStep(this.test,this.butItNow,"click",`clicking on But It Now button`);
   await this.page.waitForTimeout(5000);
    await executeStep(this.test,this.shopOnEbayStore,"click",`clicking on shop on E-bay store`);
    await this.page.waitForTimeout(4000);
   await executeStep(this.test,this.heartSymbol,"toBeDiabled",`checking the heart symbol icon Btn is disabled or not`);
   await expect(this.checkAlert).toBeVisible();
  };
  addingItemToWishlist = async () => {
    await this.clickingOnFashionButton();
    await this.page.waitForTimeout(2000);
    await this.clickingOnSearchButton();
    await this.page.waitForTimeout(6000);
  
  };
}
module.exports = ItemsPage;




