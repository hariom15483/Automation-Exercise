Feature: Order T-Shirt and Verify in Order History

Scenario: Login with valid usernae and password

Given user is already on Login Page
When title of login page is Login - My Store
Then user enters username and password
Then user clicks on login button
When title of home page is My account - My Store
Then print massege user logged in successfully


Scenario: Placing T-Shirt Order

Given user should be on T-shirt page
Then user should click on Add to cart
Then user should click on proced to checkout
Then user should click on proced to checkout on address tab
Then user should click on proceed to checkout on Shipping tab
Then user should select pay by bank wire



















