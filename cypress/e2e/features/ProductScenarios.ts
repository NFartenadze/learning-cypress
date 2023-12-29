import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import { productInformation, checkout } from "../../fixtures/data.json";

Given("the user visits the nopcommerce website", () => {
  cy.visit("/");
});
When("user adds product to cart", () => {
  cy.get("#small-searchterms").type("Nikon{enter}");

  cy.get(".products-wrapper").find(".product-title").should("contain", "Nikon");
  cy.get(".product-item").click();

  cy.get("#product-details-form").then((form) => {
    expect(form).to.exist;
    cy.wrap(form).find(".add-to-cart-panel button").first().click();
    cy.get(".cart-qty").should("contain", "1");
  });
});
Then("user navigates to cart page", () => {
  cy.get(".ico-cart").click({ force: true });
  cy.get("#shopping-cart-form").should("be.visible");
});
Then("starts checking out as guest", () => {
  //checkout
  cy.get("#termsofservice").check();
  cy.get("#checkout").click();
  cy.get(".checkout-as-guest-button").click();
});
Then("enters billing information", () => {
  const values = Object.values(checkout);
  cy.get(".edit-address .inputs").each((input, index) => {
    if (index == 4) {
      cy.wrap(input).find("#BillingNewAddress_CountryId").select(values[index]);
    } else if (index == 5) {
      cy.wrap(input)
        .find("#BillingNewAddress_StateProvinceId")
        .select(values[index]);
    } else {
      cy.wrap(input).type(values[index]);
    }
  });
  cy.get("#opc-billing .new-address-next-step-button").click();
});
Then("accepts shipping and payment methods", () => {
  cy.get("#shipping-method-buttons-container > .button-1").click();
  cy.get("#payment-method-buttons-container > .button-1").click();
  cy.get("#payment-info-buttons-container > .button-1").click();
});
Then("confirms order", () => {
  cy.get("#confirm-order-buttons-container > .button-1").click();
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
Then("the product details should match expected values", () => {
  cy.get(".overview").then((overview) => {
    cy.wrap(overview)
      .find(".product-name")
      .should("have.text", productInformation.productName);
    cy.wrap(overview)
      .find(".short-description")
      .should("have.text", productInformation.shortDescription);
    cy.wrap(overview)
      .find(".additional-details")
      .should("have.text", productInformation.additionalDetails);
    cy.wrap(overview)
      .find(".product-price")
      .should("have.text", productInformation.productPrice);
  });
});
