import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

// --- Configurações Iniciais ---

// Configuração do CORS para permitir que o Frontend acesse esta API
app.use(
  cors({
    origin: "*", // Em produção, substitua "*" pelo domínio do seu site (ex: vercel.app)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Habilita o Express para ler JSON no corpo das requisições
app.use(express.json());

// --- Rotas da API (CRUD) ---

/**
 * Rota POST: Cria um novo usuário
 * Endpoint: /usuarios
 */
app.post("/usuarios", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    // Retorna o usuário criado (incluindo o ID gerado pelo banco)
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

/**
 * Rota GET: Lista os usuários
 * Endpoint: /usuarios
 * Suporta filtros via Query Params (?name=...&email=...)
 */
app.get("/usuarios", async (req, res) => {
  try {
    const { name, email, age } = req.query;

    const users = await prisma.user.findMany({
      where: {
        // Sintaxe curta para adicionar filtros apenas se existirem
        ...(name && { name }),
        ...(email && { email }),
        ...(age && { age }),
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

/**
 * Rota PUT: Atualiza um usuário existente
 * Endpoint: /usuarios/:id
 */
app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id, // Certifique-se que o tipo do ID (String/Int) bate com o schema do Prisma
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

/**
 * Rota DELETE: Remove um usuário
 * Endpoint: /usuarios/:id
 */
app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});

// --- Inicialização do Servidor ---

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API de Cadastro de Usuários rodando 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
