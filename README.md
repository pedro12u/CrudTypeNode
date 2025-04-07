# 🧑‍💻 CRUD de Usuários com TypeScript + Express
Este projeto é uma API simples de gerenciamento de usuários (CRUD) utilizando **TypeScript**, **Node.js** e **Express**. Os dados são armazenados em memória, ideal para fins de aprendizado, testes ou como ponto de partida para projetos mais completos.

## 🚀 Tecnologias utilizadas
- Node.js
- TypeScript
- Express
- Futuras melhorias e utilização de banco de dados..

## 📂 Estrutura do Projeto
📁 src/ 
├── 📄 index.ts # Ponto de entrada da aplicação 
└── 📁 routes/ 
└── 📄 userRoutes.ts # Rotas e lógica do CRUD

## ▶️ Como rodar o projeto

1. **Clone o repositório:**
```bash
git clone https://github.com/pedro12u/CrudTypeNode.git
cd seu-repo
Instale as dependências:
npm install

Inicie o servidor em modo dev:
npm run dev
"A aplicação estará rodando em: http://localhost:3000"

📬 Endpoints da API
Base URL: http://localhost:3000/users

🔹 Criar usuário
POST /users
{
  "nome": "Fulano",
  "email": "fulano@email.com"
}

🔹 Listar todos os usuários
GET /users

🔹 Buscar usuário por ID
GET /users/:id

🔹 Atualizar usuário
PUT /users/:id
{
  "nome": "Fulano Atualizado",
  "email": "novo@email.com"
}

🔹 Deletar usuário
DELETE /users/:id

💡 Observações:
- Os dados são armazenados em memória (array de objetos), então não são persistidos após reiniciar o servidor.
- O id dos usuários é gerado automaticamente com base no tamanho atual da lista.

📄 Licença
Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais informações.

Feito com 💙 em TypeScript por Pedro Toscano.
