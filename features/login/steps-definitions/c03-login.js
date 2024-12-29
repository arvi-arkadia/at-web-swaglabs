const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { $, browser } = require("@wdio/globals");
const LoginPage = require("../../pageobjects/login.page");
const SecurePage = require("../../pageobjects/secure.page");

When("I enter credentials without password", async () => {
  await LoginPage.login("standard_user", "");
});
Then("I should see an error massage : password", async () => {
  const errorMassage = await $(`//h3[@data-test="error"]`);
  const txtError = await errorMassage.getText();
  console.log("text error", txtError);
  expect(await errorMassage.isDisplayed()).to.be.true;
  expect(txtError).to.equal("Epic sadface: Password is required");
});
