document.addEventListener('DOMContentLoaded',()=>{
    const input = document.querySelector('#userInput');
    const button = document.querySelector('#btnAvaliar');
    if(input instanceof HTMLInputElement && button instanceof HTMLButtonElement){
        try{
            button.addEventListener('click',()=>{
                const dataUser = input.value
                 if(!authDate(dataUser)){
                    window.Error('Algo saiu errado!')
                } else {
                    window.alert(`Você tem ${isBirthday(dataUser)} anos de idade!`)
                }
            })    
        } catch(err){
            console.error('Error', err);
        }
    }
});


function authDate(data){
    const mask = /^\d{2}\/\d{2}\/\d{4}$/;

    if(!mask.test(data)){
        window.Error('Formato Errado!')
        return false;
    }
    let piece = data.split('/');
    let formatedDate = new Date(`${piece[0]}-${piece[1]}-${piece[2]}`);
    console.log(formatedDate)
    if(isNaN(formatedDate.getTime())){
        window.Error('Data inválida');
    }
    console.log('Data válida')
    return true;
}

function isBirthday(dataUser){
    const objectDate = new Date();
    const currentDay = objectDate.getDay();
    const currentMonth = objectDate.getMonth();
    const currentYear = objectDate.getFullYear();
    const yearUser = dataUser.split('/')
    let difYear = currentYear - Number(yearUser[2])

    if(yearUser[1] > currentMonth){
        if(yearUser[0] > currentDay){
            difYear = difYear - 1;
        }
    }

    return difYear
}