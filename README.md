👥 UserHub - Sistema de Cadastro Full Stack
O UserHub é uma aplicação completa que demonstra a integração de ponta a ponta entre um frontend reativo e uma API escalável. O foco deste projeto foi a implementação de operações CRUD seguras e a gestão de um banco de dados NoSQL integrado para perfis de usuários.

🛠️ Stack Tecnológica
Interface (Frontend)
React.js: Componentização e reatividade para uma interface fluida.

Axios: Gerenciamento eficiente de requisições HTTP e comunicação com o servidor.

CSS Modules: Estilização isolada para evitar conflitos de escopo no design.

Engine (Backend)
Node.js & Express: Servidor de alta performance e sistema de rotas REST.

Prisma ORM: Mapeamento objeto-relacional para consultas otimizadas no banco de dados.

MongoDB: Banco de dados flexível para armazenamento de perfis de usuários.

CORS: Política de segurança configurada para integração entre domínios.

⚙️ Fluxo de Execução Local
Para rodar o projeto completo, siga os passos abaixo:

1. Configuração do Backend
   Entre na pasta api e configure o servidor: cd api npm install npx prisma generate npm run dev O servidor iniciará por padrão em http://localhost:3000.

2. Configuração do Frontend
   Em um novo terminal, entre na pasta do projeto: cd cadastro-usuarios npm install Crie um arquivo .env na raiz do frontend com a seguinte variável: VITE_API_URL=http://localhost:3000 Inicie a aplicação: npm run dev

Desenvolvido por Ygor I. de Matos.
