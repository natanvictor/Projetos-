const Ligar =document.getElementById('Ligar')
const desligar = document.getElementById('Desligar')
const lampada = document.getElementById('Desligada')

function ligada () {
    lampada.src = './imgteste2/ligada.jpg'
}
function desl () {
    lampada.src = './imgteste2/desligada.png'
}
function quebrada () {
    lampada.src = './imgteste2/quebrada.jpg'
}


Ligar.addEventListener('click', ligada )
Desligar.addEventListener('click', desl)
lampada.addEventListener('mouseover', ligada)
lampada.addEventListener('mouseleave', desl)
lampada.addEventListener('dblclick', quebrada)
