Feature: notification

  As a user
  I want that a notification appear when I click on a button
  So that I am awared of the result of the action

<<<<<<< HEAD
  Scenario Outline: sending <notificationType> notification
    Given the notification type <notificationType>
    When I click on the <notificationType> button
    Then I should see the notification <classNotification>
=======
  Scenario Outline: Send Notification
    Given the notification type <notificationType>
    When I click on the <notificationType> button
    Then I want to see the notification <classNotification>
>>>>>>> b21eb788d805413a5c3e6ea26cd08bc3b24057ce

    Examples:
      | notificationType | classNotification               |
      | error            | aeris-notification-error        |
      | success          | aeris-notification-success      |
      | notif            | aeris-notification-notification |
      | wait             | aeris-notification-wait         |
      | create           | aeris-notification-wait         |