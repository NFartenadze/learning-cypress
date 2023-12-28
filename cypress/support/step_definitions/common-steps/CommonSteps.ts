import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user visits the nopcommerce website", () => {
  cy.visit("/");
});

Then("the user should be navigated to product detail page", () => {
  cy.get("#product-details-form").should("be.visible");
});
