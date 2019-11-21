describe("HomePage Should Display Correctlly:", () => {
  it("Display Proper Text Content:", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".home-title").contains("search ip");
    cy.get("button").contains("search");
    cy.get(".item-title").contains("IP:");
  });
});
