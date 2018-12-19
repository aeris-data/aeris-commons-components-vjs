const { Given, When, Then } = require("cucumber");
const { Selector } = require("testcafe");

Given(/^the notification type ([a-z]+)$/, async function(t) {
  await t.navigateTo("http://localhost:8080/notification-test");
});

When(/^I click on the (.+) button$/, async function(t, notificationType) {
  await t.click(`#${notificationType}`);
});

Then(/^I should see the notification ([a-z|-]+)$/, async function(t, classNotification) {
  await t.expect(Selector(`.${classNotification}`).exists).ok();
});
