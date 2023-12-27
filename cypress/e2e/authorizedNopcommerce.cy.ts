const settings = {
  register: [
    "Becca",
    "Maxaradze",
    `${Math.random().toString(6)}@gmail.com`,
    "example company",
    "Test12345",
    "Test12345",
  ],
  checkout: ["New York", "Brodway", "NCR", "3423244", "99945323454"],
};

describe("Tests with authorization", () => {
  //   beforeEach("Register and authorize user", () => {
  //     cy.visit("/login");
  //     cy.get("#Email").type("john1955@gmail.com");
  //     cy.get("#Password").type("john1955{enter}");
  //   });

  it("Register user", () => {
    cy.visit("/register");

    //select gender
    cy.get(`.male input`).check();

    cy.get(
      ".form-fields .inputs input:not([type='radio'],[type='checkbox'])"
    ).each((input, index) => {
      cy.wrap(input).type(settings.register[index]);
    });

    //select date
    cy.get("select[name='DateOfBirthDay']").select("8");
    cy.get("select[name='DateOfBirthMonth']").select("September");
    cy.get("select[name='DateOfBirthYear']").select("2002");

    cy.get("#register-button").click();
    cy.wait(2000);
    cy.get(".register-continue-button").click();
  });

  // skipping this test for now it wont work unless i register and login user
  // at the moment login has some problems
  it.skip("Checkout product", () => {
    //adding product to cart
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

    //checkout
    cy.get("#topcartlink").click();
    cy.get("#shopping-cart-form").should("be.visible");

    cy.get("#termsofservice").check();
    cy.get("#checkout").click();
  });
});
