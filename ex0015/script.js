function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 6) {
        msg.innerHTML += '<p>Boa madrugada!</p>'
        img.src = 'madrugada.jpg'
        document.body.style.background = 'darkblue'
    } else if (hora < 12) {
        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        msg.innerHTML += '<p>Boa tarde!</p>'
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = 'noite.jpg'
        document.body.style.background = '#1d47f0af'
    }
}


