import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the user searches for Nikon", () => {
  cy.get("#small-searchterms").type("Nikon{enter}");
});

Then("the search results should contain product with the title Nikon", () => {
  cy.get(".products-wrapper").find(".product-title").should("contain", "Nikon");
});

When("the user clicks on searched product", () => {
  cy.get(".product-item").click();
});

When("the user adds product to cart", () => {
  cy.get(".add-to-cart-panel button").first().click();
});

Then("the cart quantity should be updated to 1", () => {
  cy.get(".cart-qty").should("contain", "1");
});
