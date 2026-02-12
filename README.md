# Cadastro de Usuários (Full Stack)

Sistema de cadastro de usuários desenvolvido para demonstrar a integração entre um Frontend em **React** e uma API RESTful em **Node.js**.

O projeto permite criar, listar, editar e excluir usuários, salvando os dados em um banco de dados relacional via Prisma ORM.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React** (Vite)
- **Axios** (Consumo de API)
- **CSS Puro** (Estilização customizada)

### Backend

- **Node.js** & **Express**
- **Prisma ORM** (Gerenciamento de banco de dados)
- **MongoDB** (ou SQL, dependendo do seu schema do Prisma)
- **Cors** (Segurança de acesso)

## ⚙️ Como rodar o projeto

Este projeto é dividido em duas partes: API e Frontend.

### Pré-requisitos

- Node.js instalado.
- Banco de dados configurado no arquivo `.env` da API.

### 1. Rodando a API (Backend)

Entre na pasta da API e instale as dependências:

```bash
cd api
npm install
npx prisma generate
Inicie o servidor:

Bash
node server.js
# ou
npm run dev
O servidor rodará na porta 3000.

2. Rodando o Frontend
Entre na pasta do projeto React:

Bash
cd cadastro-usuarios
npm install
Crie um arquivo .env na raiz do frontend com a URL da API:

Plaintext
VITE_API_URL=http://localhost:3000
Inicie o projeto:

Bash
npm run dev
```
