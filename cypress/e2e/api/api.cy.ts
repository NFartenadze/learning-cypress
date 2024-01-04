import * as users from "../../fixtures/users.json";
import * as newUser from "../../fixtures/request.json";
describe("API Testing", () => {
  const URL = Cypress.env("apiUrl");

  it("Get list of users", () => {
    cy.request("GET", URL).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.length).to.be.equal(10);

      res.body.forEach((user, index) => {
        expect(user).to.deep.equal(users[index]);
      });
    });
  });

  it("Add new user", () => {
    cy.request("POST", URL, newUser).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("name", "nika");
    });
  });

  it("Update user", () => {
    cy.request("PUT", URL + 1, newUser).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(newUser);
    });
  });

  it("Partially update user", () => {
    cy.request("PATCH", URL + 1, { name: "billy" }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("name", "billy");
    });
  });

  it("Check email format", () => {
    cy.request("GET", URL).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.length).to.be.equal(10);

      res.body.forEach((user) => {
        expect(user)
          .to.have.property("email")
          .that.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      });
    });
  });
});
