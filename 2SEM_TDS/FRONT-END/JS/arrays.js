let array = [];

function adicionarItem(tarefa,itemParagrafo){
    if(tarefa != null){
        array.push(tarefa);
        itemParagrafo.textContent = array.join(', ');
    }
}

function removerItem(tarefa,itemParagrafo){
    let indice = array.indexOf(tarefa);

    if(indice !== -1){
        array.splice(indice,1);
        itemParagrafo.textContent = array.join(', ');
    }
}

const configurarEventoDeTarefas = () =>{

    if(adicionaEntrada instanceof HTMLInputElement && botaoAdicionar instanceof HTMLButtonElement && itemParagrafo instanceof HTMLParagraphElement){

        let adicionaEntrada = document.getElementById('adicionarItem');
        let removerEntrada = document.getElementById('removerItem');
        let botaoAdicionar = document.getElementById('adicionarBtn');
        let botaoRemover = document.getElementById('removerBtn');
        let itemParagrafo = document.getElementById('item');
    
        botaoAdicionar.addEventListener('click', () =>{
            let tarefa = adicionarEntrada.value;
            adicionarItem(tarefa,itemParagrafo);
        });
    
        botaoRemover.addEventListener('click',()=>{
            let tarefa = removerEntrada.value;
            removerItem(tarefa,itemParagrafo)
        })
    }


}

document.addEventListener('DOMContentLoaded', configurarEventoDeTarefas);