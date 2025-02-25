let soma = (num1,num2)=>{
    return num1 + num2;
}

let sub = (num1,num2)=>{
    return num1 - num2;
}

let div = (num1,num2)=>{
    return num1 / num2;
}

let mult = (num1,num2)=>{
    return num1 * num2;
}

function transformarTexto(texto,callBack){
    console.log(callBack(texto) + ' bem vindo!')
}
function callBack(texto){
    return `Olá ${texto}`;
}

//transformarTexto('Pedro',callBack)

function inverteNum(num,callBack2){
    let casting = num.toString();
    console.log(callBack2(num) + ` ,número devolvido sistema: ${casting.split('').reverse().join('')}`)
}

function callBack2(texto){
    return `Número digitado usuario: ${texto}`
}

//inverteNum(123,callBack2)

const verificaVogal = (vogal)=>{
    let casting = vogal.toString();
    let vogais = ['a','e','i','o','u']
    let aux = 0;
    casting.split('').forEach(element => {
        if(vogais.includes(element)){
            aux++;
        }
    });
    return aux;
}

console.log(verificaVogal('computador'));
