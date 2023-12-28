Feature: nopcommerce unauthorized tests

  Background: 
    Given the user visits the nopcommerce website

  Scenario: Search product and add to cart
    When the user searches for Nikon
    Then the search results should contain product with the title Nikon
    When the user clicks on searched product
    Then the user should be navigated to product detail page
    When the user adds product to cart
    Then the cart quantity should be updated to 1


  Scenario: Check if user can view details of product
    When the user searches for HTC One M
    Then the search results should contain products with the title HTC One M
    When the user clicks on HTC One M
    Then the user should be navigated to product detail page
    Then the product details should match expected values
   



  Scenario: Check if user can view details of product V2
    When the user searches for HTC One M8
    Then the search results should contain product with the title HTC One M8
    When the user clicks on HTC One M8
    Then the user should be navigated to product detail page
    And the product details should match the expected values



  Scenario: Verify that navigation links exist
    Then every navigation link should be present
    Then the user clicks on each navigation link, they should be redirected to the corresponding category page


    