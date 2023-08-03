function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var boa = window.document.getElementById('cumprimento')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#5f9fc5'
        boa.innerHTML = 'Bom Dia!'
        boa.style.color = '#5f9fc5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fec256'
        boa.innerHTML = 'Boa Tarde!'
        boa.style.color = '#fec256'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0d1e33'
        boa.innerHTML = 'Boa Noite!'
        boa.style.color = '#0d1e33'
    }

    
}