describe("BlogPage should Display Correctlly:", () => {
  it("Display Proper Text Content:", () => {
    cy.visit("http://localhost:3000/blog");
    cy.contains("add to cart");
    cy.contains("Hats");
    cy.contains("Sneakers");
    cy.contains("Jackets");
    cy.contains("Womens");
    cy.contains("Mens");
    cy.contains("add to cart");
    cy.contains("Brown Cowboy");
    cy.get("button").contains("add to cart");
  });
});
