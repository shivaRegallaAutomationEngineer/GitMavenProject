$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sprint1.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the login function with valid credentials",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is opens the browser and enter the facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates  to the login",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters valid \"\u003cUsername\u003e\" and valid \"\u003cPassword\u003e\" click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to facebook home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "login-functionality;verify-the-login-function-with-valid-credentials;;1"
    },
    {
      "cells": [
        "selenium1",
        "password1"
      ],
      "line": 11,
      "id": "login-functionality;verify-the-login-function-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 898100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the login function with valid credentials",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is opens the browser and enter the facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates  to the login",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters valid \"selenium1\" and valid \"password1\" click on the login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to facebook home page",
  "keyword": "Then "
});
formatter.match({
  "location": "testSteps.user_is_opens_the_browser_and_enter_the_facebook_url()"
});
formatter.result({
  "duration": 20045808400,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.user_navigates_to_the_login()"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium1",
      "offset": 19
    },
    {
      "val": "password1",
      "offset": 41
    }
  ],
  "location": "testSteps.user_enters_valid_and_valid_click_on_the_login_button(String,String)"
});
formatter.result({
  "duration": 3421908400,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.user_navigates_to_facebook_home_page()"
});
formatter.result({
  "duration": 5655584100,
  "status": "passed"
});
formatter.after({
  "duration": 78100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify the login function with valid credentials",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is opens the browser and enter the facebook urlfff",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User navigates  to the loginfffff",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters valid \"\u003cUsername\u003e\" and valid \"\u003cPassword\u003e\" click on the login buttonfff",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User navigates to facebook home pagefff",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 21,
      "id": "login-functionality;verify-the-login-function-with-valid-credentials;;1"
    },
    {
      "cells": [
        "selenium1",
        "password1"
      ],
      "line": 22,
      "id": "login-functionality;verify-the-login-function-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 123100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the login function with valid credentials",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is opens the browser and enter the facebook urlfff",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User navigates  to the loginfffff",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters valid \"selenium1\" and valid \"password1\" click on the login buttonfff",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User navigates to facebook home pagefff",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 63600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify the login function with valid credentials",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is opens the browser and enter the facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User navigates  to the login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enters valid \"\u003cUsername\u003e\" and valid \"\u003cPassword\u003e\" click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User navigates to facebook home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 32,
      "id": "login-functionality;verify-the-login-function-with-valid-credentials;;1"
    },
    {
      "cells": [
        "selenium1",
        "password1"
      ],
      "line": 33,
      "id": "login-functionality;verify-the-login-function-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 257900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify the login function with valid credentials",
  "description": "",
  "id": "login-functionality;verify-the-login-function-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is opens the browser and enter the facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User navigates  to the login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enters valid \"selenium1\" and valid \"password1\" click on the login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User navigates to facebook home page",
  "keyword": "Then "
});
formatter.match({
  "location": "testSteps.user_is_opens_the_browser_and_enter_the_facebook_url()"
});
formatter.result({
  "duration": 10824130300,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.user_navigates_to_the_login()"
});
formatter.result({
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium1",
      "offset": 19
    },
    {
      "val": "password1",
      "offset": 41
    }
  ],
  "location": "testSteps.user_enters_valid_and_valid_click_on_the_login_button(String,String)"
});
formatter.result({
  "duration": 1344892700,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.user_navigates_to_facebook_home_page()"
});
formatter.result({
  "duration": 5564132800,
  "status": "passed"
});
formatter.after({
  "duration": 86200,
  "status": "passed"
});
});