const { Given, When, Then } = require("cucumber");
const { Selector } = require("testcafe");

Given(/^the notification type ([a-z]+)$/, async function(t, notificationType) {
   await t.navigateTo("http://localhost:8080");
  });

When(/^I click on the (.+) button$/, async (t, param1) => {
  await t.click("#notification")
});

Then(/^I want to see the notification ([a-z|-]+)$/, async function(t, classNotification) {
  await t.expect(Selector(`.${classNotification}`).exists).ok()
});
