const uuid = () => Cypress._.random(0, 1e6);

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Gestion Stock');
    cy.contains('Mentions Légales');
    cy.contains('a.btn', 'Voir le stock').click();
    cy.contains('Liste des articles');
    cy.url().should('eq', 'http://localhost:5173/stock');
    cy.get('a[title="Ajouter"]').click();

    const id = uuid();
    const testname = `t-${id}`;
    cy.get('input').eq(0).clear().type(testname);
    cy.get('input').eq(1).type('{selectall}').type('123');
    cy.get('input').eq(2).type('{selectall}').type('234');

    cy.contains('button', 'Ajouter').click();
    cy.contains('tbody tr td.name', testname).click();
    cy.get('button[title="Supprimer"]').click();

    cy.contains('tbody tr td.name', testname).should('not.exist');
  });
});
