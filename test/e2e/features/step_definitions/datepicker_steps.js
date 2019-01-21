const { Given, When, Then } = require("cucumber");
const { Selector } = require("testcafe");

Given(/^I am on the right page$/, async t => {
  await t.navigateTo("http://localhost:8080/datepicker-test");
});

When(/^I click on the input (.+)$/, async (t, inputId) => {
  await t.click(`#${inputId}`);
});

Then(/^I should see the datepicker component ([a-z|-]+) appear$/, async (t, datepickerClass) => {
  await t.expect(Selector(`.${datepickerClass}`).exists).ok();
});
