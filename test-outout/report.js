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
  "duration": 22546579429,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 11847025,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_username_and_password()"
});
formatter.result({
  "duration": 562128413,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 8058931536,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_home_page()"
});
formatter.result({
  "duration": 34469868,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message()"
});
formatter.result({
  "duration": 103717,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Placing T-Shirt Order",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history;placing-t-shirt-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user should be on T-shirt page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user should click on Add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user should click on proced to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should click on proced to checkout on address tab",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user should click on proceed to checkout on Shipping tab",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user should select pay by bank wire",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "print message order placed seccessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_search_page()"
});
formatter.result({
  "duration": 4719725019,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_addtocart()"
});
formatter.result({
  "duration": 312490074,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout()"
});
formatter.result({
  "duration": 6678077574,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout_on_address_tab()"
});
formatter.result({
  "duration": 3391362384,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout_on_Shipping_tab()"
});
formatter.result({
  "duration": 2140869455,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_select_pay_by_bank()"
});
formatter.result({
  "duration": 3988870894,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message_order_placed()"
});
formatter.result({
  "duration": 163139,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify order in order history",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history;verify-order-in-order-history",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "extract order ref id from placed order",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "click on back to order button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "extract first order item ref id from order history page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "compare both ref id both ref id should be same",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "print message order found in history page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.extract_order_ref_id_from_order()"
});
formatter.result({
  "duration": 17635759,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_back_to_order_button()"
});
formatter.result({
  "duration": 3013405489,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.extract_first_item_order_id_from_order_history()"
});
formatter.result({
  "duration": 26335066,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.compare_both_id_should_be_same()"
});
formatter.result({
  "duration": 50779,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message_order_found_in_history()"
});
formatter.result({
  "duration": 102097,
  "status": "passed"
});
});