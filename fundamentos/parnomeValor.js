//par nome/ valor
const saudacao = 'Opa' // a variavel é definida dentro de um contexto léxico
//constante - o identificador da constante que no caso é saudacao e o valor da variavel.

function exec() {
    const saudacao = 'Falaaa' // contexto léxico ou seja o contexto dela está na funcão 
    return saudacao
}

// Ojetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua ',
        numero : 123
    }
}