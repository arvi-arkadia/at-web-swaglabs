const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { $ } = require("@wdio/globals");
const LoginPage = require("../../pageobjects/login.page");
const SecurePage = require("../../pageobjects/secure.page");
const loginPage = require("../../pageobjects/login.page");

Given("I am on the login page", async () => {
  await loginPage.open();
});
When("I enter valid credentials", async () => {
  await loginPage.login("standard_user", "secret_sauce");
});
Then("I should see the dashboard", async () => {
  const title_menu = await $(`//span[@class="title"]`);
  expect(await title_menu.isDisplayed()).to.be.true;
});
