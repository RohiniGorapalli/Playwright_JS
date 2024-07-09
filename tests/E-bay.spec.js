const {test,expect} =require ('@playwright/test');
const LoginPage = require("../pages/Login");
require("dotenv").config();
test('Login to E-bay application', async ({ page }) => {
    const loginPage = new LoginPage(page,test);
    await loginPage.launchApplication();
    await loginPage.sigInWithValidCredentials()
});
   

