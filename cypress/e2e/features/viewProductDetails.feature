 Feature: Product Details Verification
 
    Scenario: Check if user can view details of product
        Given the user visits the nopcommerce website
        When the user searches for "HTC One M8"
        Then the search results should contain product with the title "HTC One M8"
        When the user clicks on searched product
        Then the user should be navigated to product detail page
        Then the product details should match expected values