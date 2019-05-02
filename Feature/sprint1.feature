Feature: Login Functionality
Background:
Given User is opens the browser and enter the facebook url
And   User navigates  to the login

Scenario Outline: Verify the login function with valid credentials

When  User enters valid "<Username>" and valid "<Password>" click on the login button
Then  User navigates to facebook home page

Examples:
|Username         | Password     |
|selenium1        | password1    |

Scenario Outline: Verify the login function with valid credentials
When  User enters valid "<Username>" and valid "<Password>" click on the login button1
Then  User navigates to facebook home page1

Examples:
|Username         | Password     |
|selenium1        | password1    |

