
function calcular(num1,num2){
    console.log(num1);
    
    let somador = 0;
    let numMaior = num1 > num2 ? num1 : num2;
    let numMenor = num1 < num2 ? num1 : num2;
    let qtdNum = 0
    
    if(num1 !== 0 && num2 !== 0){

        for (let index = numMenor; index <= numMaior; index++) {
            if(index % 3 == 0){
                qtdNum++;
                somador+= index;
            }
             
        }
        mostrarConteudo(`Foram encontrados: ${qtdNum} multiplos e o Produto dos multiplos é: ${somador}`)
    } else {
        alert("Digite números validos");
    }
}

function mostrarConteudo(conteudo){
    const resultado = document.getElementById('result');
    resultado.textContent = conteudo
}
function main(){
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    const btnCalcular = document.getElementById('calcular');

    if(num1 instanceof HTMLInputElement && num2 instanceof HTMLInputElement && btnCalcular instanceof HTMLButtonElement){
        btnCalcular.addEventListener('click',()=>{
            let valueNum1 = Number(num1.value);
            let valueNum2 = Number(num2.value);
            calcular(valueNum1,valueNum2);
        })
    }
}

main()





