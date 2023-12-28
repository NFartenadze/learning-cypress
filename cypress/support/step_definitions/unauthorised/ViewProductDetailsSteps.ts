import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

When("the user searches for HTC One M", () => {
  cy.get("#small-searchterms").type("HTC One M{enter}");
});

Then(
  "the search results should contain products with the title HTC One M",
  () => {
    cy.get(".products-wrapper")
      .find(".product-title")
      .should("contain", "HTC One M");
  }
);

When("the user clicks on HTC One M", () => {
  cy.get(".product-item").first().click();
});

const product = {
  productName: "HTC One M8 Android L 5.0 Lollipop",
  shortDescription:
    "HTC - One (M8) 4G LTE Cell Phone with 32GB Memory - Gunmetal (Sprint)",
  additionalDetails: "SKU: M8_HTC_5L",
  productPrice: " $245.00 ",
};

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
