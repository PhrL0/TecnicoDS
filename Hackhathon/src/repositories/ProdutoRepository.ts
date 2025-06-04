import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const produtoRepository = {
    cadastrarProduto: async(nome: string,textoDescritivo: string,cor: string, fabricante: string, preco: number,quantidade: number,urlImagensArray: string[]): Promise<any> =>{
        try{
            const result = await prisma.produto.create({
                data:{
                    nome:nome,
                    textoDescritivo:textoDescritivo,
                    cor:cor,
                    fabricante:fabricante,
                    preco:preco,
                    quantidade:quantidade,
                    imagens:{
                        create: urlImagensArray.map(url => ({ urlImagem: url }))
                    }
                }
            });
            return result;
        } catch(err){
            console.error('Erro ao cadastrar produto!!!');
        }
    },
    consultaProduto: async():Promise<any> =>{
        try{
            const result = await prisma.produto.findMany({
                include: {
                    imagens: true,
                }
            });
            return result;
        } catch (err){
            console.error("Error",err);
        }
    },
    updateEstoque: async(id: number,quantidade: number):Promise<any> =>{
        try{
            const result = await prisma.produto.update({
                where:{
                    id:id
                },
                data:{
                    quantidade:quantidade
                }
            });
            return result;
        } catch(err){
            console.error("Erro ao dar update no estoque:", err);
        }
    },
    deleteProduto: async(id: number): Promise<any> =>{
        try{
            const result = await prisma.produto.delete({
                where:{id:id}
            });
            return result;
        } catch(err){
            console.error('Erro ao excluir produto:',err);
        }
    }
}