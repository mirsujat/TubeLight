describe("Header and Cart Should Display Correctlly", () => {
  it("Display Proper Text Content:", () => {
    cy.visit("http://localhost:3001/blog");
    // wrong way to select element
    cy.get(".nav-link").contains("Home");
    cy.get(".nav-link").contains("Blog");
    cy.get(".nav-link").contains("Logout");

    cy.contains("Cart").click();
    // wrong way to select element
    cy.get(".empty-cart").contains("Your Cart Is Empty");
    cy.get("button").contains("checkout");
    cy.contains("Cart").click();
  });
  it("Should Display Modal,  form and input, name, email, password, confirmPassword fileds", () => {
    cy.visit("http://localhost:3001/blog");
    cy.contains("Logout").click();
    // wrong way to select element
    cy.get(".reg-form").find("form");

    cy.get("form").find("input");

    // Best way to select element
    cy.get("input[name=username]").type("mirsujat");
    cy.get("input[name=email]").type("mirsujat@gmail.com");
    cy.get("input[name=password]").type("123Password");
    cy.get("input[name=confirmPassword]").type("123Password");
    // wrong way to select element
    cy.get("button").contains("submit");
    cy.get(".submit-btn").click();
  });

  // Best way to select element
  it("Test with [data-testid]", () => {
    cy.visit("http://localhost:3001/blog");
    cy.get("[data-testid=header]").siblings("div");
    cy.get("[data-testid=nav]").find("li");
    cy.get("[data-testid=nav]")
      .find("li")
      .contains("Home");
    cy.get("[data-testid=nav]")
      .find("li")
      .contains("Blog");
    cy.get("[data-testid=nav]")
      .find("li")
      .contains("Logout");
    cy.get("[data-testid=nav]")
      .find("li")
      .contains("Cart");

    cy.contains("Logout").click();
    cy.get("[data-testid=form-group]").find("input");
    cy.get("[data-testid=username]").type("mirsujat");
    cy.get("[data-testid=email]").type("mirsujat@gmail.com");
    cy.get("[data-testid=password]").type("123Password");
    cy.get("[data-testid=confirmPassword]").type("123Password");
    cy.get("[data-testid=submit-btn]").click();
  });
});
