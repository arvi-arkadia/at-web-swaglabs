module.exports = {
  waitForElement: async (selector, timeout = 5000) => {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  },
};
