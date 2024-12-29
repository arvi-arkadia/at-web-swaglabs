const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { $ } = require("@wdio/globals");
const LoginPage = require("../../pageobjects/login.page");
const SecurePage = require("../../pageobjects/secure.page");

When("I enter valid credentials", async () => {
  await LoginPage.login("standard_user", "secret_sauce");
});
Then("I should see the dashboard", async () => {
  const title_menu = await $(`//span[@class="title"]`);
  try {
    await title_menu.waitForDisplayed({ timeout: 10000 });
  } catch (error) {
    console.error("Dashboard did not load in the expected time.");
    throw error; // Fail the test
  }
  expect(await title_menu.isDisplayed()).to.be.true;
});
