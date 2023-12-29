import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("the user visits the nopcommerce website", () => {
  cy.visit("/");
});
When("the user clicks on searched product", () => {
  cy.get(".product-item").click();
});

Then(
  "the search results should contain product with the title {string}",
  (term) => {
    cy.get(".products-wrapper").find(".product-title").should("contain", term);
  }
);

When("the user searches for {string}", (term) => {
  cy.get("#small-searchterms").type(`${term}{enter}`);
});

Then("the user should be navigated to product detail page", () => {
  cy.get("#product-details-form").should("be.visible");
});
When("the user adds product to cart", () => {
  cy.get(".add-to-cart-panel button").first().click();
});
Then("go to cart page and verify that the product is in cart", () => {
  cy.get("#topcartlink").click();
  //when there is no item in cart, table class='cart' doesn't exist
  cy.get(".cart").should("be.visible");
});
