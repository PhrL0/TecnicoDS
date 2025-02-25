const fastify = require('fastify')({ logger: true });

// Criando um endpoint GET
fastify.get('/hello', async (request, reply) => {
    return { mensagem: 'Olá, Fastify!' };
});

// Iniciando o servidor
const start = async () => {
    try {
        await fastify.listen({ port: 5000, host: '0.0.0.0' });
        console.log('Servidor rodando em http://localhost:5000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
