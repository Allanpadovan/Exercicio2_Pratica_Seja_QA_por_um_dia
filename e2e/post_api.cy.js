describe('API - Posts', () => {
  it('Deve criar um post com dados válidos', () => {
    cy.request('POST', 'https://dummyjson.com/posts/add', {
      title: 'Meu post de teste',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      expect(response.body.title).to.eq('Meu post de teste')
    })
  })

  it('Deve falhar ao criar post com dados inválidos', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/posts/add',
      body: {},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 500])
    })
  })

  it('Deve atualizar um post existente', () => {
    cy.request('PUT', 'https://dummyjson.com/posts/1', {
      title: 'Título atualizado'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.title).to.eq('Título atualizado')
    })
  })

  it('Deve retornar erro ao atualizar com campo inválido', () => {
    cy.request({
      method: 'PUT',
      url: 'https://dummyjson.com/posts/1',
      body: { campoInvalido: 'teste' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 500])
    })
  })

  it('Deve deletar um post existente', () => {
    cy.request('DELETE', 'https://dummyjson.com/posts/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('isDeleted', true)
    })
  })

  it('Deve retornar erro ao deletar post inexistente', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://dummyjson.com/posts/9999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([404, 400])
    })
  })
})
