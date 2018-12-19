Feature: notification

  As a user
  I want that a notification appear when I click on a button
  So that I am awared of the result of the action

  Scenario Outline: sending <notificationType> notification
    Given the notification type <notificationType>
    When I click on the <notificationType> button
    Then I should see the notification <classNotification>

    Examples:
      | notificationType | classNotification               |
      | error            | aeris-notification-error        |
      | success          | aeris-notification-success      |
      | notif            | aeris-notification-notification |
      | wait             | aeris-notification-wait         |
      | create           | aeris-notification-wait         |