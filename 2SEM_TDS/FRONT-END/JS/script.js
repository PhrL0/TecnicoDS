// @ts-nocheck
function exibirNome() {
  let elemento = document.getElementById('nomeInput');
  let nome;

  if (elemento instanceof HTMLInputElement) {
    nome = elemento.value;
  }

  document.body.insertAdjacentHTML('beforeend', 'Olá ' + nome);
}

function exibirDisciplina() {
  let selecao = document.getElementById('selecionaDisciplina');
  let p = document.getElementById('paragrafo');

  if (
    selecao instanceof HTMLSelectElement &&
    p instanceof HTMLParagraphElement
  ) {
    let i = selecao.selectedIndex;
    console.log(i);
    let disciplina = selecao.options[i].value;

    p.innerText = `Disciplina Selecionada: ${disciplina}`;
  }
}

function ex1() {
  let num = prompt('Digite um número: ');

  if (num != null) {
    let antecessor = Number(num) - 1;
    let sucessor = Number(num) + 1;
    alert(
      `O antecessor de ${num} é ${antecessor}, logo seu sucessor é ${sucessor}`
    );
  }
}

function ex2() {
  let baseMaior = document.getElementById('baseMaior');
  let baseMenor = document.getElementById('baseMenor');
  let altura = document.getElementById('altura');
  let p = document.getElementById('result');

  if (
    baseMaior instanceof HTMLInputElement &&
    baseMenor instanceof HTMLInputElement &&
    altura instanceof HTMLInputElement &&
    p instanceof HTMLParagraphElement
  ) {
    let areaTrapezio =
      ((Number(baseMaior.value) + Number(baseMenor.value)) *
        Number(altura.value)) /
      2;

    p.textContent = `A área do trapézio é: ${areaTrapezio}`;
  }
}

function ex3() {
  let celsius = prompt('Digite a temperatura em Celsius:');

  let celsiusToFahrenheit = (Number(celsius) * 9) / 5 + 32;
  let celsiusToKelvin = Number(celsius) + 273.15;

  alert(
    `Celsius ==> Fahrenheit = ${celsiusToFahrenheit}\n Celsius ==> Kelvin = ${celsiusToKelvin}`
  );
}

function ex4() {
  let raio = document.getElementById('raio');
  let p = document.getElementById('result');

  if (raio instanceof HTMLInputElement && p instanceof HTMLParagraphElement) {
    let area = Math.PI * Number(raio.value) ** 2;

    p.textContent = `A área do círculo é: ${area.toFixed(2)}`;
  }
}

function ternario() {
  return 1 > 0 ? console.log('Verdadeiro') : console.log('Falso');
}

function verificaPosNes() {
  let input = document.getElementById('numero');
  let result = document.getElementById('result');

  if (
    input instanceof HTMLInputElement &&
    result instanceof HTMLParagraphElement
  ) {
    let num = parseInt(input.value);

    if (num > 0) {
      result.textContent = 'Positivo';
    } else if (num < 0) {
      result.textContent = 'Negativo';
    } else {
      result.textContent = 'Zero';
    }
  }
}
//document.getElementById('btn').addEventListener('click', verificaPosNes)
// document.getElementById('btn').addEventListener('click', verificaBissexto)
document.getElementById('btn').addEventListener('click', palindromo);

function verificaBissexto() {
  let input = document.getElementById('numero');
  let result = document.getElementById('result');
  if (
    input instanceof HTMLInputElement &&
    result instanceof HTMLParagraphElement
  ) {
    let ano = Number(input.value);

    if (ano % 4 == 0) {
      result.textContent = 'Ano Bissexto';
    } else {
      result.textContent = 'Ano não Bissexto';
    }
  }
}

function palindromo() {
  let input = document.getElementById('numero');
  let result = document.getElementById('result');
  if (
    input instanceof HTMLInputElement &&
    result instanceof HTMLParagraphElement
  ) {
    let nome = input.value;
    
    console.log(nome.split(''));
    console.log(nome.split('').reverse());
    console.log(nome.split('').reverse().join(''));
    
    const reverso = nome.split('').reverse().join('');

    

    if (nome === reverso) {
      result.textContent = `A palavra ${nome} é um palíndromo!`;
    } else {
      result.textContent = `A palavra ${nome} não é um palíndromo!`;
    }
  }
}

//Função callBack

function somar(num1,num2){
  let res;
  res = num1 + num2;
  return res;
}
console.log(somar(1,2





































  
))
