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
    this.skipForNowBtn = page.locator("//a[@id='passkeys-cancel-btn']");
  }
 // writing POM model
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
  clickingOnSkipForNowButton = async () => {
    await executeStep(this.test,this.skipForNowBtn,"click",`clicking on skipfornoe button`);
  }
 
 // calling in one function of full test case
  sigInWithValidCredentials = async () => {
    await this.clickingOnSiginButton();
    await this.page.waitForTimeout(3000);
    await this.fillingUsername();
    await this.page.waitForTimeout(3000);
    await this.clickingOnContinueButton();
    await this.page.waitForTimeout(3000);
    await this.fillingPass();
    await this.clickingOnsignInButton();
    await this.page.waitForTimeout(4000);
    await this.clickingOnSkipForNowButton();
    await this.page.waitForTimeout(6000);
    
  
  };
}
module.exports = LoginPage;




