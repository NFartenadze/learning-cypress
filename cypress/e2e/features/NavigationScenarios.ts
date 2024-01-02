import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { navigationCategories } from "../../fixtures/data.json";

Given("the user visits the nopcommerce website", () => {
  cy.visit("/");
});
Then("every navigation link should be present", () => {
  cy.get(".top-menu > li > a:visible").each((link, index) => {
    cy.wrap(link).should("have.text", navigationCategories[index]);
  });
});
Then(
  "the user clicks on each navigation link, they should be redirected to the corresponding category page",
  () => {
    cy.wrap(navigationCategories).each((category: string) => {
      cy.get(".top-menu > li > a:visible")
        .contains(category)
        .should("be.visible")
        .click();
    });
  }
);
