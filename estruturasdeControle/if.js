function soBoaNoticia(nota) {//o java sempre converte os valores para verdadeiro ou falso nesse caso 
    if(nota>=7) {
        console.log('Aprovado com '+ nota)
    } else {
        console.log('Reprovado')
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade... ' + valor)
    } else {
        console.log('Não é verdade....' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])