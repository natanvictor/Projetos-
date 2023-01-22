let btn = document.getElementById('iniciar')
let caixa = document.getElementById('txt')
let res = document.getElementById('res')
let a = []

function lista() {
    
    if (caixa.value == '') {
        
        
        res.insertAdjacentHTML('beforebegin', '<h2>Voce nao digitou seu nome</h2>')
        


    } else {
        res.insertAdjacentHTML('beforeend', '<h2>Voce digitou seu nome</h2>')
        

    }

        


        

}
btn.addEventListener('click', lista)
