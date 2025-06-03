document.addEventListener('DOMContentLoaded',()=>{
    const input = document.querySelector('#userInput');
    const button = document.querySelector('#btnAvaliar');
    console.log('oi')
    if(input instanceof HTMLInputElement && button instanceof HTMLButtonElement){
        button.addEventListener('click',()=>{
            let inputValue = input.value.trim();
            let lenghtInput = inputValue.length;
            if(lenghtInput > 70){
                window.alert(`Você digitou ${lenghtInput} caracteres, excedendo o limite de 70 caracteres`);
            }
        }) 
    }
});