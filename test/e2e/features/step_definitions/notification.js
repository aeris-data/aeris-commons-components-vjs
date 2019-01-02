const { Given, When, Then } = require("cucumber");
const { Selector } = require("testcafe");

Given(/^the notification type ([a-z]+)$/, async t => {
  await t.navigateTo("http://localhost:8080/notification-test");
});

When(/^I click on the (.+) button$/, async (t, notificationType) => {
  await t.click(`#${notificationType}`);
});

Then(/^I want to see the notification ([a-z|-]+)$/, async (t, classNotification) => {
  await t.expect(Selector(`.${classNotification}`).exists).ok();
});
