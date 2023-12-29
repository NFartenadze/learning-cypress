/// <reference types="cypress" />
// import * as registerValues from "../fixtures/registrationFields.json";

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable<Subject>;
    register(): Chainable<Subject>;
  }
}

// Cypress.Commands.add("register", () => {
//   cy.visit("/register");
//   //select gender
//   cy.get(`.male input`).check();

//   cy.get(
//     ".form-fields .inputs input:not([type='radio'],[type='checkbox'])"
//   ).each((input, index) => {
//     if (index == 2) {
//       cy.wrap(input).type(
//         `${Math.random().toString(6)}${registerValues[index]}`
//       );
//     } else {
//       cy.wrap(input).type(registerValues[index]);
//     }
//   });
//   //select date
//   cy.get("select[name='DateOfBirthDay']").select("8");
//   cy.get("select[name='DateOfBirthMonth']").select("September");
//   cy.get("select[name='DateOfBirthYear']").select("2002");

//   cy.get("#register-button").click();
//   cy.get(".register-continue-button").click();
// });
// Cypress.Commands.add("login", () => {
//   cy.get(".ico-login").click();
//   cy.get("#Email").type(registerValues[2]);
//   cy.get("#Password").type(`${registerValues[4]}{enter}`);
// });
