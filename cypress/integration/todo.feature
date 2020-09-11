Feature: TODO

  Scenario: Error is shown when system returns error
    Given System returns error when fetching todos
    When User opens todo page
    Then User sees an error