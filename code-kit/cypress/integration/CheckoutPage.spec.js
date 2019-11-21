describe("CheckouPage Should Display Correctlly:", () => {
  it("Display Proper Text Content:", () => {
    cy.visit("http://localhost:3000/checkout");
    cy.get(".photo").contains("photo");
    cy.get(".name").contains("name");
    cy.get(".quantity").contains("quantity");
    cy.get(".price").contains("$price");
    cy.get(".remove").contains("remove");

    cy.get(".empty-cart").contains("Your Cart Is Empty");
    cy.get(".total").contains("total=$");
    cy.get("button").contains("checkout");
  });
});
