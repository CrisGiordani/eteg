## Sistema rápido de cadastro para processo seletivo da Eteg

## Para rodar o projeto:

- 1 Clonar o repositório
- 2 Acessar a pasta backend
  --- Criar o .env (cp .env.example .env)
  --- Rodar 'npm install && npm run seed && npm run start:dev"
- 3 Acessar a pastar frontend e rodar 'npm install && npm run dev"
- 4 Rodar "docker-compose up' para subir o ambiente do postgres

Extra: Collection do Insomnia na raiz (Insomnia.json)

## Requisitos funcionais

- [x] Deve ser possível se cadastrar em uma tela apenas;
- [x] Dados a serem cadastrados: nome completo, CPF, e-mail, cor preferida e observações
- [x] Não permitir mais de um cadastro (verificar CPF e e-mail)

## Requisitos não-funcionais

- [x] Tabela com as cores do arco-iris (possibilidade de acrescentar cores futuramente)
- [x] Os dados da aplicação precisam ser persistidos em banco de dados postgres;
- [x] Publicar projeto em um repositório público do Github
- [x] Disponibilizar o ambiente em Imagem do Docker
- [x] Requeridos: Typescript, React.js e Node.js
