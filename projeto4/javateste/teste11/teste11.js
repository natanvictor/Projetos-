
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let a = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, a)) {
        a.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        
    } else {
        window.alert('Valor invalido')
    }
    // esse codigo abaixo é para apagar a lacuna do input
    num.value=''
    num.focus()
}



