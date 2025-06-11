
import { PrismaClient, Produto, } from "../../generated/prisma";


import { produtoRepository } from "../repositories/ProdutoRepository";
import { FastifyReply, FastifyRequest } from 'fastify';

export const produtoController = {
    adicionarProduto: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const { nome, textoDescritivo, cor, fabricante, preco, quantidade, imagens } = request.body as {
                nome: string,
                textoDescritivo: string,
                cor: string,
                fabricante: string,
                preco: number,
                quantidade: number,
                imagens: string[]
            }

            if (!nome && !textoDescritivo && !cor && !fabricante && !preco && !quantidade && !imagens) {
                return reply.status(400).send({ error: 'Precisa fornecer todos os dados do produto!' });
            }

            const result = await produtoRepository.cadastrarProduto(nome, textoDescritivo, cor, fabricante, preco, quantidade, imagens);

            if (result) {
                return reply.send({
                    success: true,
                    message: 'Produto cadastrado com sucesso!',
                })
            }
        } catch (err) {
            console.error("Erro interno no cadastro controller");
        }
    },
    consultaProdutos: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const result = await produtoRepository.consultaProduto();

            if (result.length === 0) {
                return reply.status(400).send({ error: 'Nenhum produto encontrado!' });
            }

            return reply.send({ result })
        } catch (err) {
            console.error("Erro interno na busca produto", err);
        }
    },
    updateProduto: async (request: FastifyRequest<{ Params: { id: string }, Body: { quantidade: number } }>,
        reply: FastifyReply): Promise<void> => {

        let id: string = '';
        let quantidade: number = 0;
        try {

            id = request.params.id;
            quantidade = request.body.quantidade;

            if (!id || quantidade === undefined) {
                return reply.status(400).send({ error: 'ID e quantidade são obrigatórios!' });
            }

            const idNum = Number(id);
            if (isNaN(idNum)) {
                return reply.status(400).send({ error: 'ID inválido!' });
            }


            if (quantidade < 0) {
                return reply.status(400).send({ error: 'A quantidade não pode ser negativa!' });
            }


            const result: Produto = await produtoRepository.updateEstoque(idNum, quantidade);


            return reply.status(200).send({
                success: true,
                message: 'Estoque atualizado com sucesso!',
                produto: result
            });
        } catch (err: any) {
            console.error("Erro interno ao atualizar produto", err);


            if (err.code === 'P2025') {
                return reply.status(404).send({ error: `Produto com ID ${id} não encontrado para atualização.` });
            }


            return reply.status(500).send({ error: 'Erro interno no servidor.' });
        }
    },
    deleteProduto: async (request: FastifyRequest<{ Params: { id: string } }>, 
        reply: FastifyReply ): Promise<void> => {
        
        const { id } = request.params; 

        try {
            
            if (!id) {
                return reply.status(400).send({ error: 'O ID do produto é obrigatório para exclusão.' });
            }

            const idNum = Number(id);
            if (isNaN(idNum)) { 
                return reply.status(400).send({ error: 'O ID fornecido é inválido. Deve ser um número.' });
            }

            const result: Produto = await produtoRepository.deleteProduto(idNum);

            return reply.status(200).send({
                success: true,
                message: `Produto com ID ${result.id} excluído com sucesso!`,
                
            });
        } catch (err: any) {
            console.error("Erro interno ao excluir produto:", err);


            if (err.code === 'P2025') {
                return reply.status(404).send({ error: `Produto com ID ${id} não encontrado para exclusão.` });
            }

            if (err.message && err.message.includes('não encontrado')) {
                return reply.status(404).send({ error: err.message });
            }
            return reply.status(500).send({ error: 'Erro interno no servidor ao excluir o produto.' });
        }
    }
}