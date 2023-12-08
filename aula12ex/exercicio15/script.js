function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO!] Verifique as datas e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homem-criança.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'menino-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina-criança.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'menina-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}