var res = document.getElementById('resultado')
var botao = document.getElementById('botao')
var dark = 'dark'
var branco = 'branco'
var azul = 'azul'
var botao2 = document.getElementById('botao2')


function verificar () {
    var nome = document.getElementById('texto')
    
    
    if (nome.value == '' && tema.value == '' ) {
        window.alert('digite seu nome e escolha um tema')

    } else {
        res.innerHTML = `Seja Bem Vindo ${nome.value}`
    }
        
   
    
        

}

botao.addEventListener('click', verificar)



function verificar2 () {
    var tema = document.getElementById('tema')
    if (tema.value == ''){
        window.alert('escolha um tema dentro da lacuna')
    }else if (tema.value == dark) {
        body.style.background = '#000000'
    }

}
botao2.addEventListener('click', verificar2)
