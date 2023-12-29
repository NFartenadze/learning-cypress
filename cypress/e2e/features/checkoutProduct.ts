import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import * as checkoutInfo from "../../fixtures/checkoutInfo.json";

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
  const values = Object.values(checkoutInfo);
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
