const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number,isInteger(peso1))//essa linha mostra se a variavel é inteira ou não
console.log(Number,isInteger(peso2))//


const avaliacao1 = 9.871
const avaliacao2 = 6.871



const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log(media.toFixed(1))//toFixed diz ajuda a decidir qantos numeros vão ser mostrados apos a virgula
console.log(media.toString())//transforma em string se add 2 ele mostra o número inario 
console.log(typeof media)//