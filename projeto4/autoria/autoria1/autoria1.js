var res = document.getElementById('resultado')
var botao = document.getElementById('botao')


function verificar () {
    var nome = document.getElementById('texto')
    var tema = document.getElementById('tema')
    
    if (nome.value == '' && tema.value == '' || tema.value !== 'dark' && tema.value !== 'branco'&& tema.value !== 'azul') {
        window.alert('digite seu nome e escolha um tema')
    } else {
        if(tema.value == 'dark') {
            body.style.background = '#000000'
        }
        res.innerHTML = `Seja Bem Vindo ${nome.value}`
    }
}

botao.addEventListener('click', verificar)


