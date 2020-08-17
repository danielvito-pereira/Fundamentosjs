const nome = 'Rebeca'//variavel fixa 
const concatenacao = 'olá' + nome+ '!'//concatenando as Strings 
const template =`olá 
${nome}!` //dessa forma é possivel que ocorra a quebra de linhas 

console.log(concatenacao, template)


//..expressoes 


console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()//está inter polando para passar para maiuscula 
console.log(`Ei... ${up('cuidado')}!`)//chama a função dentro da expreção com o dolar 