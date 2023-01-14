function verificar () {

    var data = new Date()
    var ano = data.getFullYear()
    var form = document.getElementById('text')
    var res = document.querySelector('div#res')
    if (form.value.length == 0 || form.value > ano ) {
        window.alert('Erro digite novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var imagem = document.getElementById('foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <17) {
                imagem.src = './imagem7/homemadolescente.jpeg'
            } else if (idade >= 17 && idade < 40) {
                imagem.src = './imagem7/homemadulto.webp'
            } else {
                imagem.src = './imagem7/imgt1.jpg'
            }
        
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >= 0 && idade <17) {
                imagem.src = './imagem7/mulheradolescente.webp'

            } else if (idade >= 17 && idade < 40) {
                imagem.src = './imagem7/mulherjovem.jpeg'
            } else {
                imagem.src = './imagem7/mulhervelha.jpeg'

            }
                
        }
    
        res.innerHTML = `Segunda a pesquisa voce e ${genero} e tem a idade de ${idade}`
        res.appendChild(imagem)

    }
       
    

    
}