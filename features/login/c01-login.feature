Feature: Login functionality

    Scenario: Successful login
        Given I am on the login page
        When I enter valid credentials
        Then I should see the dashboard
    
    Scenario: Unsuccessful login without username
        Given I am on the login page
        When I enter credentials without username
        Then I should see an error massage : username
        When I close modal error
        Then Modal error disappear
    
    Scenario: Unsuccessful login without password
        Given I am on the login page
        When I enter credentials without password
        Then I should see an error massage : password
        When I close modal error
        Then Modal error disappear

    @debug
    Scenario: Login using user that not recorded on system
        Given I am on the login page
        When I enter credentials not match
        Then I should see an error massage : not match
        When I close modal error
        Then Modal error disappear