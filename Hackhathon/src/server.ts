import Fastify from 'fastify'
import cors from '@fastify/cors'
import { produtoRouter } from './routers/ProdutoRouter'
const fastify = Fastify({ logger: true })

fastify.register(cors, {
  origin: 'http://127.0.0.1:5500', // ATENÇÃO: para desenvolvimento é 'http://localhost:PORDA_DO_FRONTEND' ou '*', para produção: 'https://seu-dominio.com'
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adicione DELETE
  allowedHeaders: ['Content-Type', 'Authorization'], // Adicione qualquer header personalizado que você use
  credentials: true // Se você usar cookies ou autenticação com credenciais
});

fastify.register(produtoRouter)

async function start() {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    console.log('🚀 HTTP rodando em http://localhost:3000')

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()