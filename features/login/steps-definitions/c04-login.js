const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { $, browser } = require("@wdio/globals");
const LoginPage = require("../../pageobjects/login.page");
const SecurePage = require("../../pageobjects/secure.page");

When("I enter credentials not match", async () => {
  await LoginPage.login("standard_user", "secret_");
});

Then("I should see an error massage : not match", async () => {
  const errorMassage = await $(`//h3[@data-test="error"]`);
  const txtError = await errorMassage.getText();
  console.log("text error", txtError);
  expect(await errorMassage.isDisplayed()).to.be.true;
  expect(txtError).to.equal(
    "Epic sadface: Username and password do not match any user in this service"
  );
});
