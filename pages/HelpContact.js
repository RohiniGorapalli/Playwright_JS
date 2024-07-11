const { executeStep } = require("../utilities/actions");
require("dotenv").config();
const { Data } = require("../data.json");

class HelpContactPage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.helpContact = page.locator("//a[text()=' Help & Contact']");
    this.error = page.locator("//div[@id='wrapper']");
    this.checkbox = page.locator("//div[@id='checkbox']");
    this.captchaImage = page.locator("//div[@id='wrapper']");
    this.frameLocator = page.frameLocator('//iframe[@title="Widget containing checkbox for hCaptcha security challenge"]');
    this.checkboxInFrame = null; // Initialize checkboxInFrame as a class property
  }

  // writing in POM model

  clickingOnHelpContactLink = async () => {
    await executeStep(this.test, this.helpContact, "click", `clicking on Help and Contact link`);
  };

  errorDisabilityCheck = async () => {
    await executeStep(this.test, this.error, "toBeDisabled", `checking the visibility of error to get captcha`);
  };

  clickingOnCheckbox = async () => {
    // await this.frameLocator.waitFor();
    this.checkboxInFrame = this.frameLocator.locator("//div[@id='checkbox']"); // Assign to the class property
    await executeStep(this.test, this.checkboxInFrame, "click", `clicking on the checkbox`);
  };

  captchaImageDisabilityCheck = async () => {
    await executeStep(this.test, this.captchaImage, "toBeVisible", `checking the visibility of captcha image`);
  };

  // calling in one function of full test case
  HelpContactLinkCheck = async () => {
    await this.clickingOnHelpContactLink();
    // await this.page.waitForTimeout(6000);

    //await this.errorDisabilityCheck();

    // Ensure the checkboxInFrame is initialized before checking its visibility
    if (!this.checkboxInFrame) {
      await this.clickingOnCheckbox();
    }

    if (await this.checkboxInFrame.isVisible()) {
      await this.captchaImageDisabilityCheck();
    } else {
      console.log("Checkbox not checked");
    }

    await this.page.waitForTimeout(3000);
  };
}

module.exports = HelpContactPage;
