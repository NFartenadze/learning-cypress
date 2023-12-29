  Feature: Search and Cart functionality

    Scenario: Search product and add to cart
      Given the user visits the nopcommerce website
      When the user searches for "Nikon"
      Then the search results should contain product with the title "Nikon"
      When the user clicks on searched product
      Then the user should be navigated to product detail page
      When the user adds product to cart
      Then go to cart page and verify that the product is in cart 