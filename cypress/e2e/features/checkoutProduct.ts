// import { When } from "@badeball/cypress-cucumber-preprocessor";

// const values = {
//   register: [
//     "Becca",
//     "Maxaradze",
//     `${Math.random().toString(6)}@gmail.com`,
//     "example company",
//     "Test12345",
//     "Test12345",
//   ],
//   checkout: ["New York", "Brodway", "NCR", "3423244", "99945323454"],
// };

// function registerNewUser() {
//   cy.visit("/register");

//   //select gender
//   cy.get(`.male input`).check();

//   cy.get(
//     ".form-fields .inputs input:not([type='radio'],[type='checkbox'])"
//   ).each((input, index) => {
//     cy.wrap(input).type(values.register[index]);
//   });

//   //select date
//   cy.get("select[name='DateOfBirthDay']").select("8");
//   cy.get("select[name='DateOfBirthMonth']").select("September");
//   cy.get("select[name='DateOfBirthYear']").select("2002");

//   cy.get("#register-button").click();
//   cy.get(".register-continue-button").click();
// }

// function loginUser() {
//   cy.get(".ico-login").click();
//   cy.get("#Email").type(values.register[2]);
//   cy.get("#Password").type(`${values.register[4]}{enter}`);
// }

// function addProductToCart() {
//   cy.get("#small-searchterms").type("Nikon{enter}");

//   cy.get(".products-wrapper").find(".product-title").should("contain", "Nikon");
//   cy.get(".product-item").click();

//   cy.get("#product-details-form").then((form) => {
//     expect(form).to.exist;
//     cy.wrap(form).find(".add-to-cart-panel button").first().click();
//     cy.get(".cart-qty").should("contain", "1");
//   });
// }

// When("", () => {
//   //register new user
//   registerNewUser();

//   //login with newly registered account
//   loginUser();

//   //adding product to cart
//   addProductToCart();

//   //checkout
//   cy.get("#topcartlink").click();
//   cy.get("#shopping-cart-form").should("be.visible");

//   cy.get("#termsofservice").check();
//   cy.get("#checkout").click();

//   //working on this test
// });
