/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
  });
  it('Login com sucesso', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('admin')
    cy.get('#password').type('123456')
    cy.get('input[value="Login"]').click()
  });
});