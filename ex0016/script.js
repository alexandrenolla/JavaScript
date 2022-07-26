function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade < 14) {
            //Criança
            img.setAttribute('src', 'menino.jpg')
           } else if (idade < 26) {
            // Jovem
            img.setAttribute('src', 'moço.jpg')
           } else if (idade < 60) {
            // Adulto
            img.setAttribute('src', 'homem.jpg')
           } else {
            // Idoso
            img.setAttribute('src', 'veio.jpg')
           }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'menina.jpg')
               } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'moça.jpg')
               } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'mulher.jpg')
               } else {
                // Idoso
                img.setAttribute('src', 'veia.jpg')
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}