const payload = [
  "Computers ",
  "Electronics ",
  "Apparel ",
  "Digital downloads ",
  "Books ",
  "Jewelry ",
  "Gift Cards ",
];

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("every navigation link should be present", () => {
  cy.get(".top-menu > li > a:visible").each((link, index) => {
    cy.wrap(link).should("have.text", payload[index]);
  });
});

Then(
  "the user clicks on each navigation link, they should be redirected to the corresponding category page",
  () => {
    cy.wrap(payload).each((category: string) => {
      cy.get(".top-menu > li > a:visible")
        .contains(category)
        .should("be.visible")
        .click();
    });
  }
);
