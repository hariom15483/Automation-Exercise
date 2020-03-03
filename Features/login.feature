Feature: Order T-Shirt and Verify in Order History, and Update Personal Information (First Name) in My Account

Scenario: Login with valid usernae and password

Given user is already on Login Page
When title of login page is Login - My Store
Then user enters username and password
Then user clicks on login button
When title of home page is My account - My Store
Then print massege user logged in successfully

Scenario: Update Personal Information (First Name) in My Account
Given user should be on Personal info page
Then clear value of first name field
Then insert a value from random string
Then click on save button
Then print message personal information updated successfully

Scenario: Order T-Shirt (and Verify in Order History)

Given user should be on T-shirt page
Then user should click on Add to cart
Then user should click on proced to checkout
Then user should click on proced to checkout on address tab
Then user should click on proceed to checkout on Shipping tab
Then user should select pay by bank wire
Then print message order placed seccessfully

Scenario: Verify order in order history
Given extract order ref id from placed order
Then click on back to order button
Then extract first order item ref id from order history page
Then compare both ref id both ref id should be same
Then print message order found in history page





















