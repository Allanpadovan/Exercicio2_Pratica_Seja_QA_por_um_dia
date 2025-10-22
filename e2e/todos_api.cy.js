describe('API - Todos', () => {
  it('Deve retornar lista de tarefas', () => {
    cy.request('GET', 'https://dummyjson.com/todos').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.todos).to.be.an('array')
    })
  })

  it('Deve adicionar uma nova tarefa', () => {
    cy.request('POST', 'https://dummyjson.com/todos/add', {
      todo: 'Estudar Cypress',
      completed: false,
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.todo).to.eq('Estudar Cypress')
    })
  })

  it('Deve atualizar uma tarefa existente', () => {
    cy.request('PUT', 'https://dummyjson.com/todos/1', {
      completed: true
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.completed).to.eq(true)
    })
  })

  it('Deve deletar uma tarefa existente', () => {
    cy.request('DELETE', 'https://dummyjson.com/todos/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('isDeleted', true)
    })
  })
})
