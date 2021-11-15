describe('BNB Staging Test', () => {
  it.only('Navigate to the BBH URL', function () {
    cy.visit('http://192.168.88.207/web/login'); //BBH main URL
    cy.get('#login').type('mahesh@dhisolutions.com'); //BBH username
    cy.get('#password').type('odoo'); //BBH password
    cy.get('.btn').click(); //Login Button

    cy.get('.modal-title').should('have.text', 'Allowed Location');
    cy.get('#o_field_input_10').click();
    cy.get('#ui-id-3').click();
    cy.get('.btn > span').click();

    cy.get('.o_mail_navbar_item > .dropdown-toggle').click();
    cy.get(':nth-child(2) > .o_td_label > .o_form_label').should('have.text', 'Default Location');
    cy.get('#o_field_input_54').should('have.id', 'o_field_input_54');
    cy.get('footer > .btn').click();

    cy.get('.full').click();
    cy.get('[href="#menu_id=224"]').click();
  })
})
