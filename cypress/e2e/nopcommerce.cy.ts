describe("Testing nopCommerce", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search product and add to cart", () => {
    cy.get("#small-searchterms").type("Nikon{enter}");

    cy.get(".products-wrapper")
      .find(".product-title")
      .should("contain", "Nikon");
    cy.get(".product-item").click();

    cy.get("#product-details-form").then((form) => {
      expect(form).to.exist;
      cy.wrap(form).find(".add-to-cart-panel button").first().click();
      cy.wait(3000);
      cy.get(".cart-qty").should("contain", "1");
    });
  });

  it("Check if user can view details of product", () => {
    const productDetail = {
      productName: "HTC One M8 Android L 5.0 Lollipop",
      shortDescription:
        "HTC - One (M8) 4G LTE Cell Phone with 32GB Memory - Gunmetal (Sprint)",
      additionalDetails: "SKU: M8_HTC_5L",
      productPrice: " $245.00 ",
    };

    cy.get("#small-searchterms").type("HTC One M8{enter}");
    cy.get(".products-wrapper")
      .find(".product-title")
      .should("contain", "HTC One M8");
    cy.get(".product-item").click();

    cy.get(".overview").then((overview) => {
      cy.wrap(overview)
        .find(".product-name")
        .should("have.text", productDetail.productName);
      cy.wrap(overview)
        .find(".short-description")
        .should("have.text", productDetail.shortDescription);
      cy.wrap(overview)
        .find(".additional-details")
        .should("have.text", productDetail.additionalDetails);
      cy.wrap(overview)
        .find(".product-price")
        .should("have.text", productDetail.productPrice);
    });
  });

  //second way, just want to know if this is good practice
  it("Check if user can view details of product V2", () => {
    const productDetail = {
      productName: {
        locator: ".product-name",
        expectedText: "HTC One M8 Android L 5.0 Lollipop",
      },
      shortDescription: {
        locator: ".short-description",
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

    cy.get("#small-searchterms").type("HTC One M8{enter}");
    cy.get(".products-wrapper")
      .find(".product-title")
      .should("contain", "HTC One M8");
    cy.get(".product-item").click();

    cy.get(".overview").then((overview) => {
      Object.keys(productDetail).forEach((key) => {
        const { locator, expectedText } = productDetail[key];
        cy.wrap(overview).find(locator).should("have.text", expectedText);
      });
    });
  });

  const payload = [
    "Computers ",
    "Electronics ",
    "Apparel ",
    "Digital downloads ",
    "Books ",
    "Jewelry ",
    "Gift Cards ",
  ];
  it("verify that navigation links exist", () => {
    cy.get(".top-menu > li > a:visible").each((link, index) => {
      cy.wrap(link).should("have.text", payload[index]);
    });
    cy.wrap(payload).each((category: string) => {
      cy.get(".top-menu > li > a:visible")
        .contains(category)
        .should("be.visible")
        .click();
    });
  });
});
