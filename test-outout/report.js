$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/eclipse-workspace/maven_hari_1/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Order T-Shirt and Verify in Order History",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid usernae and password",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history;login-with-valid-usernae-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Login - My Store",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "title of home page is My account - My Store",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "print massege user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_alredy_on_login_page()"
});
formatter.result({
  "duration": 14099106409,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 17777291,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_username_and_password()"
});
formatter.result({
  "duration": 570178945,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 7314764296,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_home_page()"
});
formatter.result({
  "duration": 34647052,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message()"
});
formatter.result({
  "duration": 131268,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Placing T-Shirt Order",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history;placing-t-shirt-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user should be on T-shirt page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user should click on Add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should click on proced to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user should click on proced to checkout on address tab",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user should click on proceed to checkout on Shipping tab",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user should select pay by bank wire",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_search_page()"
});
formatter.result({
  "duration": 4839131431,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_addtocart()"
});
formatter.result({
  "duration": 53881250,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout()"
});
formatter.result({
  "duration": 5285342554,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout_on_address_tab()"
});
formatter.result({
  "duration": 1967453227,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout_on_Shipping_tab()"
});
formatter.result({
  "duration": 1991696656,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_select_pay_by_bank()"
});
formatter.result({
  "duration": 4805347071,
  "status": "passed"
});
});