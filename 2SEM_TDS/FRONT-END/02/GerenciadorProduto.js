import Produto from "./Produto";

export default class GerenciadorProduto {
    estoque = [];
    
    constructor() {
        this.estoque = [];
        this.#configurar();
    }

    #configurar() {
        let nomeInput = document.getElementById('nome');
        let quantidade = document.getElementById('quantidade');
        let valorInput = document.getElementById('preco');
        let adicionarProdutoBtn = document.getElementById('adicionarProdutoBtn');
        let calcularTotalBtn = document.getElementById('calcularTotalBtn');
        let removerProdutoBtn = document.getElementById('removerProdutoBtn');
    
        if ((nomeInput instanceof HTMLInputElement) &&
            (quantidade instanceof HTMLInputElement) &&
            (valorInput instanceof HTMLInputElement) &&
            (adicionarProdutoBtn instanceof HTMLButtonElement) &&
            (calcularTotalBtn instanceof HTMLButtonElement) &&
            (removerProdutoBtn instanceof HTMLButtonElement)) {
            
            adicionarProdutoBtn.addEventListener('click', () => {
                this.addProduto(); 
            });

            calcularTotalBtn.addEventListener('click', () => {
                this.calcTotalEstoque();
            });

            removerProdutoBtn.addEventListener('click', () => {
                this.removerProduto();
            });
        }
    }

    addProduto() {
        let nomeInput = document.getElementById('nome');
        let quantidade = document.getElementById('quantidade');
        let valorInput = document.getElementById('preco');
        let nomeValue = String(nomeInput.value);
        let quantidadeValue = Number(quantidade.value);
        let valorValue = Number(valorInput.value);

        this.estoque.push(new Produto(nomeValue, quantidadeValue, valorValue));
        this.exibirConteudo();
    }

    removerProduto() {
        let produtoRemovido = document.getElementById('removerItem').value;
        let index = this.estoque.findIndex(produto => produto.nome === produtoRemovido);

        if (index !== -1) {
            this.estoque.splice(index, 1);
            this.exibirConteudo();
        } else {
            alert("Produto não encontrado!");
        }
    }

    exibirConteudo() {
        let paragrafo = document.getElementById('produtosAdicionados');
        paragrafo.innerHTML = ""; 

        this.estoque.forEach(produto => {
            paragrafo.innerHTML += `Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Preço: R$${produto.valor}<br>`;
        });
    }

    calcTotalEstoque() {
        let total = 0;
        let totalParagrafo = document.getElementById('resultado')
        this.estoque.forEach(produto => {
            total += produto.getValor();
        });

        totalParagrafo.textContent = total;
    }
}
