
let produto = ["Café","Leite","Manteiga", "Biscoito", "Chocolate", "Água", "Refrigerante","Arroz", "Macarrão","Feijão"];
let carrinho = []

  function popularDropdown(produto, elementoDeDropdown) {
    produto.forEach((item) => {
      let elementoOption = document.createElement('option');
      elementoOption.textContent = item;
      elementoDeDropdown.appendChild(elementoOption);
    });
  }

   function exibirConteudo(totalCompra) {
     let paragrafo = document.getElementById('result');
     if (paragrafo instanceof HTMLElement) {
       paragrafo.textContent = `O total da sua compra deu: ${totalCompra}`;
     }
   }

  function getValueSelect(elementoDeDropdown) {
    let itemSelecionado = ""
    elementoDeDropdown.addEventListener('change', (evento) => {
      let indice = evento.target.selectedIndex;
      itemSelecionado = evento.target.options[indice].text;
    });
    return itemSelecionado
  }
  
  function addItem(produto,preco,quantidade){
    let compra = {
        "produto":produto,
        "preco":preco,
        "quantidade":quantidade
    }
    carrinho.push(compra)
  }

  function calcTotal(){
    let totalCarrinho = 0;

    carrinho.forEach(produto => {
        totalCarrinho += (produto.QUANTIDADE * produto.PRECO)
    });

    exibirConteudo(totalCarrinho);
  }

  function inicializar() {
    let itensDropdown = document.getElementById('produtos');
    let preco = document.getElementById('preco');
    let quantidade = document.getElementById('quantidade');
    let btnAdd = document.getElementById('addItem');
    let btnCalc = document.getElementById('calcularTotal');
    popularDropdown(produto, itensDropdown);
    btnAdd.addEventListener('click',()=>{
        addItem(getValueSelect(itensDropdown),preco.value,quantidade.value)
        preco.textContent = '';
        quantidade.textContent = '';
        
    })
    btnCalc.addEventListener('click',()=>{
        calcTotal()
    })

  }
  
  document.addEventListener('DOMContentLoaded', inicializar);