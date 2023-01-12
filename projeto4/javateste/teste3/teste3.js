
const calcular = document.getElementById('calcular1');


function imc () {
    const nome = document.getElementById('name1').value;
    const altura = document.getElementById('altura1').value;
    const peso = document.getElementById('peso1').value;
    const resultado = document.getElementById('re');

    if (nome !== '' && altura !== '' && peso !== '') {
        alert ('valor preenchido')

    }else {
        resultado.textConten = ' Preencha todos os campos';
    }

}


calcular.addEventListener('click',i mc);