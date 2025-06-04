import { produtoRepository} from "../repositories/ProdutoRepository";
import { FastifyReply, FastifyRequest } from 'fastify';

export const produtoController = {
    adicionarProduto: async(request: FastifyRequest, reply: FastifyReply):Promise<void> =>{
        try{
            const {nome,textoDescritivo,cor,fabricante,preco,quantidade,imagens} = request.body as {
                nome: string,
                textoDescritivo: string ,
                cor: string,
                fabricante: string,
                preco: number,
                quantidade: number,
                imagens: string
            } 

            if(!nome && !textoDescritivo && !cor && !fabricante && !preco && !quantidade && !imagens){
                return reply.status(400).send({ error: 'Precisa fornecer todos os dados do produto!' });
            }

            const result = await produtoRepository.cadastrarProduto(nome,textoDescritivo,cor,fabricante,preco,quantidade,imagens);

            if(result){
                return reply.send({
                    success:true,
                    message: 'Produto cadastrado com sucesso!',
                })
            }
        } catch(err){
            console.error("Erro interno no cadastro controller");
        }
    },
    consultaProdutos: async(request: FastifyRequest,reply: FastifyReply):Promise<void> =>{
        try{
            const {id,nome,textoDescritivo,cor,fabricante,preco,quantidade,imagens} = await produtoRepository.consultaProduto();

            if(!id){
                return reply.status(400).send({ error: 'Nenhum produto encontrado!'});
            }

            return reply.send({
                id:id,
                nome:nome,
                textoDescritivo:textoDescritivo,
                cor:cor,
                fabricante:fabricante,
                preco:preco,
                quantidade:quantidade,
                imagens:imagens
            })
        } catch(err){
            console.error("Erro interno na busca produto",err);
        }
    }
}