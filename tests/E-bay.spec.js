const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/Login");
const ItemsPage = require("../pages/Items");
const HelpContactPage = require('../pages/HelpContact');
require("dotenv").config();
test('Login to E-bay application', async ({ page }) => {
   const loginPage = new LoginPage(page, test);
   await loginPage.launchApplication();
   await loginPage.sigInWithValidCredentials();

});
test('Adding item to cart', async ({ page }) => {
   const itemsPage = new ItemsPage(page, test);
   const loginPage = new LoginPage(page, test);
   await loginPage.launchApplication();
   await loginPage.sigInWithValidCredentials();
   await itemsPage.addingItemToWishlist();
});

test('Getting help from e-bay check', async ({ page }) => {
   const helpContactPage = new HelpContactPage(page, test);
   const loginPage = new LoginPage(page, test);
   await loginPage.launchApplication();
   // await loginPage.sigInWithValidCredentials();
   await helpContactPage.HelpContactLinkCheck();


});


