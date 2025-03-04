describe("Página de inicio", () => {
  it("Carga correctamente", () => {
    cy.visit("/");
    cy.contains("Marco Tignanelli").should("be.visible");
  });

  it("Navega a la página de contacto", () => {
    cy.visit("/");
    cy.get(".dropdown").click();
    cy.get(".dropdown > .menu > :nth-child(4) > .rounded-sm").click();
    cy.url().should("include", "/#contact");
  });
});
