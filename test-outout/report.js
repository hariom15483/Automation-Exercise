$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/eclipse-workspace/maven_hari_1/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Order T-Shirt and Verify in Order History, and Update Personal Information (First Name) in My Account",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history,-and-update-personal-information-(first-name)-in-my-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid usernae and password",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history,-and-update-personal-information-(first-name)-in-my-account;login-with-valid-usernae-and-password",
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
  "duration": 16961056773,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page()"
});
formatter.result({
  "duration": 8718213,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_username_and_password()"
});
formatter.result({
  "duration": 464186126,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 8693366724,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_home_page()"
});
formatter.result({
  "duration": 37312917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message()"
});
formatter.result({
  "duration": 143152,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Update Personal Information (First Name) in My Account",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history,-and-update-personal-information-(first-name)-in-my-account;update-personal-information-(first-name)-in-my-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user should be on Personal info page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "clear value of first name field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "insert a value from random string",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "print message personal information updated successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_on_personal_info_page()"
});
formatter.result({
  "duration": 2151085090,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clear_value_from_first_name_field()"
});
formatter.result({
  "duration": 130156840,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.insert_a_value_from_random_string()"
});
formatter.result({
  "duration": 234233587,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_save_button()"
});
formatter.result({
  "duration": 2356120576,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message_personal_info_updated()"
});
formatter.result({
  "duration": 325737,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Order T-Shirt (and Verify in Order History)",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history,-and-update-personal-information-(first-name)-in-my-account;order-t-shirt-(and-verify-in-order-history)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user should be on T-shirt page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user should click on Add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user should click on proced to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user should click on proced to checkout on address tab",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user should click on proceed to checkout on Shipping tab",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should select pay by bank wire",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "print message order placed seccessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_search_page()"
});
formatter.result({
  "duration": 5078749686,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_addtocart()"
});
formatter.result({
  "duration": 57412507,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout()"
});
formatter.result({
  "duration": 8714779530,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout_on_address_tab()"
});
formatter.result({
  "duration": 3093796828,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_on_proced_to_checkout_on_Shipping_tab()"
});
formatter.result({
  "duration": 2907026969,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_select_pay_by_bank()"
});
formatter.result({
  "duration": 4605659520,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message_order_placed()"
});
formatter.result({
  "duration": 113442,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify order in order history",
  "description": "",
  "id": "order-t-shirt-and-verify-in-order-history,-and-update-personal-information-(first-name)-in-my-account;verify-order-in-order-history",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "extract order ref id from placed order",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "click on back to order button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "extract first order item ref id from order history page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "compare both ref id both ref id should be same",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "print message order found in history page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.extract_order_ref_id_from_order()"
});
formatter.result({
  "duration": 9429651,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_back_to_order_button()"
});
formatter.result({
  "duration": 2916540892,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.extract_first_item_order_id_from_order_history()"
});
formatter.result({
  "duration": 21663456,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.compare_both_id_should_be_same()"
});
formatter.result({
  "duration": 65364,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.print_message_order_found_in_history()"
});
formatter.result({
  "duration": 104798,
  "status": "passed"
});
});