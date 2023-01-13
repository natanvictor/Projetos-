
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date() /* data atual*/
    var hora = data.getHours()
    
    msg.innerHTML = `<b>Agora sâo ${hora} horas<b> `
    if (hora >=0 && hora <12) {
        img.src = 'imgteste6/img65.jpg'

        document.body.style.background = '#d0cdb1'

    } else if (hora >=12 && hora <18){
        img.src = 'imgteste6/img61.jpg'
        document.body.style.background = '#be8a13'

    } else {
        img.src = 'imgteste6/img62.webp'
        document.body.style.background = '#0b1b3c'



    }



}
