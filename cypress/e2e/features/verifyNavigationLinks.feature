  Feature: Navigation Links Verification
    
    Scenario: Verify that navigation links exist
        Given the user visits the nopcommerce website
        Then every navigation link should be present
        Then the user clicks on each navigation link, they should be redirected to the corresponding category page