document.addEventListener('DOMContentLoaded',()=>{
    const inputNome = document.querySelector('#inputName');
    const btn = document.querySelector('#btnAdicionar')
    const btnSortear = document.querySelector('#btnSortear');
    if(inputNome instanceof HTMLInputElement && btn instanceof HTMLButtonElement && btnSortear instanceof HTMLButtonElement){
        let pessoas = [];
        let duplas = [];
        let numerosSorteados = [];
        btn.addEventListener('click', ()=>{
            let nomeCompleto = inputNome.value;
            let separaNome = nomeCompleto.split(' ');
            console.log(separaNome)
            let containSobrenome = nomeCompleto.includes(' ')
            if(!containSobrenome){
                window.alert('Precisa ter sobrenome!');
                return 
            }
            pessoas.push({'nome': separaNome[0], "sobrenome": separaNome[1] })
        });
        btnSortear.addEventListener('click',()=>{
            console.log("oi")
            if(pessoas.length % 2 == 0){
                console.log("oi par")
                pessoas.forEach(pessoa => {
                    console.log(pessoa)
                    let numberRandom = gerarNumeroAleatorio(0,pessoas.length);
                    duplas.push({"Pessoa1": pessoa, "Pessoa2": pessoas[numberRandom]});
                    numerosSorteados.push(pessoas.indexOf(pessoa),numberRandom)
                    console.log(duplas)
                    console.log(numerosSorteados)
                });
            }
        })
    }

});

function gerarNumeroAleatorio(min,max){
    return Math.random() * (max - min) + min;
}