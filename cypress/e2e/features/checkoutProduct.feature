Feature: Checkout functionality

    Scenario: Checkout product
        Given the user visits the nopcommerce website
        When user adds product to cart
        Then user navigates to cart page
        Then starts checking out as guest
        Then enters billing information
        Then accepts shipping and payment methods
        Then confirms order



