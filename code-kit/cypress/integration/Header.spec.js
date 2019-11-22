describe("Header and Cart Should Display Correctlly", () => {
  it("Display Proper Text Content:", () => {
    cy.visit("http://localhost:3000/blog");
    cy.get(".nav-link").contains("Home");
    cy.get(".nav-link").contains("Blog");
    cy.get(".nav-link").contains("Logout");

    cy.contains("Cart").click();
    cy.get(".empty-cart").contains("Your Cart Is Empty");
    cy.get("button").contains("checkout");
    cy.contains("Cart").click();
  });
  it("Should Display Modal,  form and input, name, email, password, confirmPassword fileds", () => {
    cy.visit("http://localhost:3000/blog");
    cy.contains("Logout").click();
    cy.get(".reg-form").find("form");
    cy.get("form").find("input");

    cy.get("input[name=username]").type("mirsujat");
    cy.get("input[name=email]").type("mirsujat@gmail.com");
    cy.get("input[name=password]").type("123Password");
    cy.get("input[name=confirmPassword]").type("123Password");

    cy.get("button").contains("submit");
  });
});
