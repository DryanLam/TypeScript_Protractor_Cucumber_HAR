Feature: As a user, I would like to see a page title

    @Smoke
    Scenario: See title on home page - Smoke test
        Given I am on the home page
        When I do nothing
        Then I should see the title

    @Regression
    Scenario: See title on home page - Regression test
        Given I am on the home page
        When I do nothing
        Then I should see the title