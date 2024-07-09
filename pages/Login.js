const { executeStep } = require("../utilities/actions");
require("dotenv").config();
const {Data} = require("../data.json");
class LoginPage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.signIn = page.locator("(//a[text()='Sign in'])[1]");
    this.inputUsername = page.locator("//input[@id='userid']");
    this.continueBtn = page.locator("//button[@id='signin-continue-btn']");
    this.inputPassword = page.locator("//input[@id='pass']");
    this.signInBtn = page.locator("//button[@id='sgnBt']");
    this.fashionBtn = page.locator("(//a[text()='Fashion'])[2]");
    this.watchesOption = page.locator("//a[text()='Watches']");
    this.inputSearch = page.locator("//input[@id='gh-ac']");
    this.rolexSearchBtn = page.locator("//td[@class='gh-td gh-sch-btn']");
    this.butItNow = page.locator("(//li[@class='fake-tabs__item btn'])[2]");
    this.heartSymbol = page.locator("//span[@class='follow-heart-wrapper heartIcon ']");
    this.shopOnEbayStore = page.locator("//div[@class='pd-cta-icon']");
    //this.checkAlert = page.locator("//div[@id='ebayin-sunset']");
  }
  // async login(username,password){
  //     await expect(this.inputPassword).toBeVisible();
  //     await this.inputPassword.click();
  //     await this.signIn.click();
  //     await this.page.waitForTimeout(2000);
  //     await this.inputUsername.type(username);
  //     await this.page.waitForTimeout(2000);
  //     await this.continueBtn.click();
  //     await this.page.waitForTimeout(2000);
  //     await this.inputPassword.fill(password);
  //     await this.page.waitForTimeout(2000);
  //     await this.signInBtn.click();
  //     await this.page.waitForTimeout(2000);
  // }
  launchApplication = async () => {
    await executeStep(this.test,await this.page,"navigate",`Navigating to ${process.env.url}`,[process.env.url]);
  };
  clickingOnSiginButton = async () => {
    await executeStep(this.test,this.signIn,"click",`clicking on sig in button`);
  };
  fillingUsername = async () => {
    await executeStep(this.test,this.inputUsername,"fill",`filling username into input feild:${process.env.login_username}`,[process.env.login_username]);
  };
  clickingOnContinueButton = async () => {
    await executeStep(this.test,this.continueBtn,"click",`clicking on continue button`);
  };
  fillingPass = async () => {
    await executeStep(this.test,this.inputPassword,"fill",`filling password into input feild:${process.env.login_password}`,[process.env.login_password]);
  };
  clickingOnsignInButton = async () => {
    await executeStep(this.test,this.signInBtn,"click",`clicking on signIn button`);
  };
  clickingOnFashionButton = async () => {
    await executeStep(this.test,this.fashionBtn,"hover",`hovering on fashion option`);
    await this.page.waitForTimeout(2000);
    await executeStep(this.test,this.watchesOption,"click",`clicking on watches option`);
  };
  clickingOnSearchButton = async () => {
    await executeStep(this.test,this.inputSearch,"click",`clicking on inputSearch button`);
    await executeStep(this.test,this.inputSearch,"fill",`filling inputSearch  feild:${process.env.inputSearchFill}`,[process.env.inputSearchFill]);
    await executeStep(this.test,this.rolexSearchBtn,"click",`clicking on rolexSearchBtn button`);
    await executeStep(this.test,this.butItNow,"click",`clicking on But It Now button`);
    await this.page.waitForTimeout(3000);
    //await executeStep(this.test,this.shopOnEbayStore,"click",`clicking on shop on E-bay store`);
    //await this.page.waitForTimeout(2000);
   // await executeStep(this.test,this.heartSymbol,"toBeDiabled",`checking the heart symbol icon Btn is disabled or not`);
   // await expect(this.checkAlert).toBeVisible();
  };
  sigInWithValidCredentials = async () => {
    await this.clickingOnSiginButton();
    await this.page.waitForTimeout(2000);
    await this.fillingUsername();
    await this.clickingOnContinueButton();
    await this.page.waitForTimeout(2000);
    await this.fillingPass();
    await this.clickingOnsignInButton();
    await this.page.waitForTimeout(4000);
    await this.clickingOnFashionButton();
    await this.page.waitForTimeout(2000);
    await this.clickingOnSearchButton();
    await this.page.waitForTimeout(2000);
  
  };
}
module.exports = LoginPage;




