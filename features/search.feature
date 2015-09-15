Feature: Search the Web

  As a human
  I want to search the web
  So I can find information

  @watch
  Scenario: Search for SAVIcontrols
    Given I have visited Google
    When I search for "savi controls"
    Then I see "SAVI Controls"
