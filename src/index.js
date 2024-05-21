require('dotenv').config()
const express = require('express');
const { connectToDatabase } = require('./db/database-connection');

// Routers
const personagemRouter = require('./personagem/personagem.router')

// Declaramos a função main()
async function main() {
  // Conectamos no DB
  await connectToDatabase()

  // Inicializamos o Express
  const app = express();

  // Middlewares
  // Sinalizo para o Express que estamos usando JSON no Body
  app.use(express.json());

  // Endpoint de Hello World
  app.get('/', function (req, res) {
    res.send('Hello World');
  });

  // Router de Personagem
  app.use('/personagem', personagemRouter)

  app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000')
  });
}

// Executamos a função main()
main();
