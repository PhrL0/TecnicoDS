const arrayTarefas = [];

function cadastrarTarefa(entradaTarefa) {
  if (entradaTarefa && !arrayTarefas.includes(entradaTarefa)) {
    arrayTarefas.push(entradaTarefa);
    exibirConteudo();
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function exibirConteudo() {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.innerHTML = arrayTarefas.join('<br>');
    
  } 
}

function removerUltimaTarefa(){
  console.log(arrayTarefas);
  
  if(arrayTarefas.length > 0){
    arrayTarefas.pop();
    exibirConteudo();
  } else {
    alert('Não existe')
  }
}

function removerQualquerTarefa(tarefa){
  let index = arrayTarefas.indexOf(tarefa)
  if(index != -1){
    arrayTarefas.splice(index,1)
    exibirConteudo();
  } else {
    alert('Não existe')
  }
}

function addLista(tarefa){
  let lista = document.getElementById('lista');
  lista.innerHTML = "";
  arrayTarefas.push(tarefa);
  
  if(lista instanceof HTMLOListElement){
    arrayTarefas.forEach((element,index) => {
      let linha = document.createElement('li');
      linha.textContent = element
      linha.id = `tarefa-${index}`
      lista.appendChild(linha)
    });
  }
}

function removeLista(tarefa){
  let index = arrayTarefas.indexOf(tarefa)
  if(index != -1){
    
  }

}
const configurarCadastroDeTarefas = () => {
  let entradaTarefa = document.getElementById('tarefa');
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');
  let botaoRemoverTarefa = document.getElementById('removerTarefaBtn');
  let removerTarefa = document.getElementById('tarefaRemovida');
  let btnAddLista = document.getElementById('btnLista');
  let btnRemoveLista = document.getElementById('btnRemoveLista');


  //prettier-ignore
  if((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)){
    botaoCadastrarTarefa.addEventListener('click',() =>{
      cadastrarTarefa(entradaTarefa.value);
      entradaTarefa.value = ''
    })
  }

  if(botaoRemoverTarefa instanceof HTMLButtonElement){
    botaoRemoverTarefa.addEventListener('click', ()=>{
      removerUltimaTarefa();
    })
  }

  if(removerTarefa instanceof HTMLInputElement){
      removerTarefa.addEventListener('keypress',function(event){
        if(event.key === "Enter"){
          removerQualquerTarefa(removerTarefa.value)
        }
      })
  }

  if(btnAddLista instanceof HTMLButtonElement){
    btnAddLista.addEventListener('click',()=>{
      addLista(entradaTarefa.value)
    })
  }

  if(btnRemoveLista instanceof HTMLButtonElement){
    btnRemoveLista.addEventListener('click',()=>{
      removeLista();
    })
  }


};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);
