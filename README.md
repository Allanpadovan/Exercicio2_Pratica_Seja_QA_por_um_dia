**Trabalho 2: Seja QA por um dia**  
**API Dummy JSON**

O objetivo é validar o comportamento dos endpoints, documentar falhas e comportamentos inesperados, e criar uma suíte de testes automatizados utilizando Cypress para validar a confiabilidade da API com uma mentalidade de QA.

## **Integrantes da Equipe**

Allan França Padovan \- 1986140

Ana Karla de Souza Moretão \- 1986881

Lucas Gimenez \- 1996567

**Falhas e Comportamentos Inesperados Encontrados**

Durante a análise exploratória e a automação, identificamos os seguintes comportamentos que diferem do esperado ou não seguem as melhores práticas de design de API.

**Título**: \[API \- POST\] \- Asserção de código de status incorreta para criação de recurso.

**Passos**:

**1\.** O teste envia uma requisição POST para https://dummyjson.com/posts/add com dados válidos.

**2\.** O teste tenta validar que o código de status da resposta é 200\.

**Resultado esperado**: Código de status 200 (expected 201 to equal 200).

**Resultado obtido**: Código de status 201 (Created).
======================================================================================================================
**Título**: \[API \- PUT\] \- A API aceita campos inválidos na atualização, retornando sucesso em vez de erro de validação.

**Passos**:

**1\.** O teste envia uma requisição PUT para https://dummyjson.com/posts/1.

**2\.** O corpo da requisição contém um campo não esperado/inválido: { campoInvalido: 'teste' }.

**3\.** O teste tenta validar que o código de status é um erro (400 ou 500).

**Resultado esperado**: Código de status de erro (400 ou 500).

**Resultado obtido**: Código de status 200 (OK). AssertionError: expected 200 to be one of \[ 400, 500 \].
=====================================================================================================================

**​Título**: \[API \- POST\] \- Falha na asserção do código de status ao adicionar nova tarefa.

​**Passos**:

**​1.** Enviar uma requisição POST para o endpoint https://dummyjson.com/todos/add.

**​2.** Corpo da requisição enviado: { todo: 'Estudar Cypress', completed: false, userId: 1 }.

**3\.** ​Verificar se o código de status da resposta é 200\.

**​Resultado esperado**: Código de status 200\.

**​Resultado obtido**: Código de status 201 (Created). ​AssertionError: expected 201 to equal 200\.

