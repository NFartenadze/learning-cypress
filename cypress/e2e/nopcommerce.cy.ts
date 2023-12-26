describe("Testing nopCommerce", () => {
  beforeEach(() => {
    cy.visit("https://demo.nopcommerce.com/");
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
  // const payload = [
  //   "Computers ",
  //   "Electronics ",
  //   "Apparel ",
  //   "Digital downloads ",
  //   "Books ",
  //   "Jewelry ",
  //   "Gift Cards ",
  // ];
  // it("verify that navigation links exist", () => {
  //   cy.get(".top-menu > li > a:visible").each((link, index) => {
  //     cy.wrap(link).should("have.text", payload[index]);
  //   });
  // });

  // it("verify that you can navigate using every link", () => {
  //   cy.wrap(payload).each((category: string) => {
  //     cy.get(".top-menu > li > a:visible")
  //       .contains(category)
  //       .should("be.visible")
  //       .click();
  //   });
  // });
});
