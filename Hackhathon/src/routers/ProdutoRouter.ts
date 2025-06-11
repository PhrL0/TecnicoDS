import fastify, { FastifyInstance } from "fastify";
import { produtoController } from "../controller/ProdutoController";

export async function produtoRouter(fastify: FastifyInstance) {
    fastify.get('/getProdutos',produtoController.consultaProdutos);
    fastify.post('/cadastroProduto',produtoController.adicionarProduto); 
    fastify.put('/updateProduto/:id', produtoController.updateProduto); 
    fastify.delete('/produtos/:id', produtoController.deleteProduto); 
}   