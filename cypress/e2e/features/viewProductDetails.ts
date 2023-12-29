import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import * as product from "../../fixtures/productInformation.json";

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
Then("the product details should match expected values", () => {
  cy.get(".overview").then((overview) => {
    cy.wrap(overview)
      .find(".product-name")
      .should("have.text", product.productName);
    cy.wrap(overview)
      .find(".short-description")
      .should("have.text", product.shortDescription);
    cy.wrap(overview)
      .find(".additional-details")
      .should("have.text", product.additionalDetails);
    cy.wrap(overview)
      .find(".product-price")
      .should("have.text", product.productPrice);
  });
});
