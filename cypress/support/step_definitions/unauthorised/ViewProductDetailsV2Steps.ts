const product = {
  productName: {
    locator: ".product-name ",
    expectedText: "HTC One M8 Android L 5.0 Lollipop",
  },
  shortDescription: {
    locator: ".short-description ",
    expectedText:
      "HTC - One (M8) 4G LTE Cell Phone with 32GB Memory - Gunmetal (Sprint)",
  },
  additionalDetails: {
    locator: ".additional-details",
    expectedText: "SKU: M8_HTC_5L",
  },
  productPrice: {
    locator: ".product-price",
    expectedText: " $245.00 ",
  },
};

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the user searches for HTC One M8", () => {
  cy.get("#small-searchterms").type("HTC One M8{enter}");
});

Then(
  "the search results should contain product with the title HTC One M8",
  () => {
    cy.get(".products-wrapper")
      .find(".product-title")
      .should("contain", "HTC One M8");
  }
);

When("the user clicks on HTC One M8", () => {
  cy.get(".product-item").click();
});

Then("the product details should match the expected values", () => {
  cy.get(".overview").then((overview) => {
    Object.keys(product).forEach((key) => {
      const { locator, expectedText } = product[key];
      cy.wrap(overview).find(locator).should("have.text", expectedText);
    });
  });
});
