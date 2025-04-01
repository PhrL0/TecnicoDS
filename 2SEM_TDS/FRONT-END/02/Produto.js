export default class Produto{
    #nome;
    #quantidade;
    #preco;

    constructor(nome, quantidade, preco) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }

    getNome(){
        return this.#nome;
    }
    getQuantidade(){
        return this.#quantidade;
    }
    getPreco(){
        return this.#preco;
    }

    setNome(nome){
        this.#nome = nome;
    }
    setQuantidade(quantidade){
        this.#quantidade = quantidade;
    }
    setPreco(preco){
        this.#preco = preco;
    }

    
}