const imprimirResuldado = function (nota) {
    switch (Math.floor(nota)){//Math floor arredonda pra baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break//sempre coloque
        case 8: case 7:
            console.log('Aprovado')
        break  
        case 6: case 5: case 4:
            console.log('Recupereção')
        break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        break
        default:
            console.log('Nota Inválida')        
    }

}

imprimirResuldado(10)
imprimirResuldado(8.9)
imprimirResuldado(6.55)
imprimirResuldado(2.3)
imprimirResuldado(-1)
imprimirResuldado(11)