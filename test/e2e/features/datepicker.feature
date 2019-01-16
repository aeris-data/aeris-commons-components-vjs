Feature: datepicker

  As a user
  I want the datepicker component to appear when I click on the input
  So that I can manipulate the datepicker component

  Scenario Outline: opening the datepicker
    Given I am on the right page
    When I click on the input <input_id>
    Then I should see the datepicker component <datepicker_class> appear

    Examples:
      | input_id          | datepicker_class |
      | input__datepicker | aeris-datepicker |
