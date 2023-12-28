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


  # Scenario: Check if user can view details of product
  #   When the user searches for HTC One M
  #   Then the search results should contain products with the title HTC One M
  #   When the user clicks on HTC One M
  #   Then the user should be navigated to product detail page
  #   Then the product details should match expected values:
  #     | Product Name                                     | HTC One M8 Android L 5.0 Lollipop                                   |
  #     | Short Description                                | HTC - One (M8) 4G LTE Cell Phone with 32GB Memory - Gunmetal (Sprint) |
  #     | Additional Details                               | SKU: M8_HTC_5L                                                      |
  #     | Product Price                                     | $245.00                                                             |



  # Scenario: Check if user can view details of product V2
  #   When the user searches for "HTC One M8"
  #   Then the search results should contain products with the title "HTC One M8"
  #   When the user clicks on a product
  #   Then the user should be able to view the product details
  #   And the product details should match the expected values:
  #     | Locator              | Expected Text                                        |
  #     | .product-name        | HTC One M8 Android L 5.0 Lollipop                     |
  #     | .short-description   | HTC - One (M8) 4G LTE Cell Phone with 32GB Memory - Gunmetal (Sprint) |
  #     | .additional-details  | SKU: M8_HTC_5L                                       |
  #     | .product-price       | $245.00                                              |



  # Scenario: Verify that navigation links exist
  #   Then the navigation links should exist for the following categories:
  #     | Computers        |
  #     | Electronics      |
  #     | Apparel          |
  #     | Digital downloads|
  #     | Books            |
  #     | Jewelry          |
  #     | Gift Cards       |
    # When the user clicks on each navigation link
    # Then the user should be redirected to the corresponding category page