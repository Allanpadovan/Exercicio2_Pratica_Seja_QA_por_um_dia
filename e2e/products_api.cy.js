describe('API - Products', () => {
  it('Deve retornar lista de produtos', () => {
    cy.request('GET', 'https://dummyjson.com/products').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.be.an('array')
    })
  })

  it('Deve retornar apenas 5 produtos quando usado limit=5', () => {
    cy.request('GET', 'https://dummyjson.com/products?limit=5').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.have.length(5)
    })
  })

  it('Cada produto deve conter os campos esperados', () => {
    cy.request('GET', 'https://dummyjson.com/products?limit=1').then((response) => {
      const product = response.body.products[0]
      expect(product).to.have.property('id')
      expect(product).to.have.property('title')
      expect(product).to.have.property('price')
      expect(product).to.have.property('category')
    })
  })
})
