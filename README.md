# Cypress Automation

Gustavo Molina (gmolina@applaudostudios.com)


# Swag Labs


## 2023


# Summary

Resolution to Cypress Code Challenge is about to focus the effort in create a Test Automation Framework based on automate test cases from Swag Labs page ([www.saucedemo.com](www.saucedemo.com)) 


# Goals



1. Create a Test Automation Framework Based on Cypress
2. Implement Automation best practices (Page Object Model, Commands and recycle code)
3. Focus in more than 4 test cases 
4. Exploratory Testing and Test plan


# Specifications 



* Cypress 
* Mocha and Chai 
* POM (Page Object Model)
* Visual Studio Code 


# Delivery Results  


## Exploratory Testing Results based on checklist



* Login
    * Verify user should be able to login 
    * Verify that required field should be mandatory 
    * Validate different user roles (Standard, Locked, Problem and Performance Glitch )
* Inventory Page 
    * Verify the product shows in the main page 
    * Verify that user is able to add products to Cart 
    * Verify that user is able to remove products from cart
    * Verify that user is able to order products using filter 
    * Verify that user is able to navigate in hamburger menu options
* Cart 
    * Verify that prices are working correctly displayed 
    * Verify that car is filled correctly 
    * Verify that cart show the correct grand total 
* Purchases 
    * Verify that user is able to checkout 
    * Verify that user is able to cancel the order 
    * Verify that user is able to complete the order form with personal information
* Logout 
    * Verify that user is able to logout from application


## Test Cases 

Test Cases are based on Login/Logout Feature and Checkout Feature because the most important aspect from the page is complete purchases so to complete it you should be able to login and checkout products. 


<table>
  <tr>
   <td><strong>Test Cases </strong>
   </td>
   <td><strong>Status</strong>
   </td>
   <td><strong>Expected Result</strong>
   </td>
  </tr>
  <tr>
   <td>TC1. [Login] Verify that user is able to login in Swag Labs with Standard User 
   </td>
   <td>Done
   </td>
   <td>User should be moved to inventory page 
   </td>
  </tr>
  <tr>
   <td>TC2. [Login] Verify that user is NOT able to login in Swag Labs with Locked User
   </td>
   <td>Done
   </td>
   <td>Locked User should NOT be able to login  
   </td>
  </tr>
  <tr>
   <td>TC3. [Login] Verify that Problem User is NOT able to purchase 
   </td>
   <td>Done
   </td>
   <td>Problem user should not be able to purchase 
   </td>
  </tr>
  <tr>
   <td>TC4. [Login] Verify that Performance Glitch User is able to login with a timelapse
   </td>
   <td>Done
   </td>
   <td>Performance Glitch User should be able to login with a timelapse or delay 
   </td>
  </tr>
  <tr>
   <td>TC5. [Purchase] Verify that Standard User is able to purchase a product
   </td>
   <td>Done 
   </td>
   <td>Standard user should be able to complete checkout workflow
   </td>
  </tr>
  <tr>
   <td>TC6. [Purchase] Verify that Standard User is able to add and remove an item 
   </td>
   <td>
   </td>
   <td>Standard user should be able to add and remove an item to cart 
   </td>
  </tr>
  <tr>
   <td>TC7. [Logout] Verify that Standard User is able to logout from application
   </td>
   <td>Done
   </td>
   <td>Standard user should be able to logout from Swag Labs 
   </td>
  </tr>
</table>

