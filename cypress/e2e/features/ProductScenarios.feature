Feature: Checkout functionality

    Scenario: Checkout product
        Given the user visits the nopcommerce website
        When user adds product to cart
        Then user navigates to cart page
        Then starts checking out as guest
        Then enters billing information
        Then accepts shipping and payment methods
        Then confirms order

    Scenario: Search product and add to cart
        Given the user visits the nopcommerce website
        When the user searches for "Nikon"
        Then the search results should contain product with the title "Nikon"
        When the user clicks on searched product
        Then the user should be navigated to product detail page
        When the user adds product to cart
        Then go to cart page and verify that the product is in cart 
    
    Scenario: Check if user can view details of product
        Given the user visits the nopcommerce website
        When the user searches for "HTC One M8"
        Then the search results should contain product with the title "HTC One M8"
        When the user clicks on searched product
        Then the user should be navigated to product detail page
        Then the product details should match expected values




