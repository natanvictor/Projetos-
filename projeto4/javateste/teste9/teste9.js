
var btn = document.getElementById('btn')

function validar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passos')
    var resultado = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Digite o numero')

    }else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //contagem crescente
            for (let c = i; c < f; c += p) {
                resultado.innerHTML += `${c} , `
            }

        }else {
            //contagem regressiva
            for (let c = i; c > f; c -= p){
                resultado.innerHTML += `${c} , `
            }

        }

      
        
        
    }
    
   

}



btn.addEventListener('click', validar)