const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const LoginPage = require("../pageobjects/login.page");

Given("I am on the login page", async () => {
  console.log("Loaded shared steps using shared steps");
  await LoginPage.open();
});

When("I close modal error", async () => {
  const btnCloseError = await $(`//button[@class="error-button"]`);
  await btnCloseError.isDisplayed();
  await btnCloseError.click();
});

Then("Modal error disappear", async () => {
  const errorMassage = await $(`//h3[@data-test="error"]`);
  expect(await errorMassage.isDisplayed()).to.be.false;
});
