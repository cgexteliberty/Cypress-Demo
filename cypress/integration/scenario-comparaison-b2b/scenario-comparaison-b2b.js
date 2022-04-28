Given('I am connected as an admin to the backoffice', () => {
    const newUrl = Cypress.env('urlB2b')
    cy.visit(newUrl)

    cy.setCookie("cookie", "puppeteer-header': 'extra-puppeteer");

    cy.get('#username').type("puppeteer@elibadmin")
    cy.get('#password').type("Gp!qo-8glq#")

    cy.get('#_submit').contains('Se connecter').click()
});

And('I am on the page who list the partners', () => {
    cy.visit(Cypress.env('urlB2b') + "/admin/partners/list")
})

When('I click on the link on the ID of the first partner of the list', () => {
    cy.get(':nth-child(1) > .sonata-ba-list-field-integer > .sonata-link-identifier').click()
})

And('I click on the link {string} in the navbar', (content) => {
    cy.get('.navbar-collapse > .navbar-left > .nav > li:nth-child(3) > a').click()
});

And('I click on the orange icon to connect as a user for the first user of the list', () => {
    cy.get(':nth-child(1) > :nth-child(9) > .btn-group > #connectUser').invoke('removeAttr', 'target').click()
});

Then('I should have a new tab open on the Dashboard of this user', () => {
    cy.url().should('include', '/fr/#/dashboard')
    cy.contains("Tableau de bord", { timeout: 10000 }).should('be.visible')
})