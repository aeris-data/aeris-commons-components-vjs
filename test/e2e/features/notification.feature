Feature: notification

  As a user
  I want that a notification appear when I click on a button
  So that I am awared of the result of the action

  Scenario Outline: notification
    Given the notification type <notificationType>
    When I click on the "notification type" button
    Then I want to see the notification <classNotification>

    Examples:
      | notificationType | classNotification |
      | success          | aeris-notification-notification |
      | notification     | aeris-notification-error |
