function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert('Data incorreta! Verifica a data e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //bebê
                img.setAttribute('src', 'imagens/boy3.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/boy5.png')
            } else if (idade < 15) {
                //adolescente
                img.setAttribute('src', 'imagens/man10.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/man20.png')
            } else if (idade < 35) {
                //adulto
                img.setAttribute('src', 'imagens/man30.png')
            } else if (idade < 45) {
                //meia idade
                img.setAttribute('src', 'imagens/man40.png')
            } else if (idade < 59) {
                //maduro
                img.setAttribute('src', 'imagens/man50.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'imagens/man60.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //bebê
                img.setAttribute('src', 'imagens/girl3.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/girl5.png')
            } else if (idade < 15) {
                //adolescente
                img.setAttribute('src', 'imagens/woman10.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/woman20.png')
            } else if (idade < 35) {
                //adulta
                img.setAttribute('src', 'imagens/woman30.png')
            } else if (idade < 45) {
                //meia idade
                img.setAttribute('src', 'imagens/woman40.png')
            } else if (idade < 59) {
                //madura
                img.setAttribute('src', 'imagens/woman50.png')
            } else if (idade >= 60) {
                //idosa
                img.setAttribute('src', 'imagens/woman60.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos`
        res.appendChild(img)
    }
}
