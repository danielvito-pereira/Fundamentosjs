const valores = [7.7, 8.9,6.3, 9.2]//é dinamico. NUNCA MISTURE TIPOS DE DADOS. SEMPRE COMEÇA NO 0 
console.log(valores[0], valores[3])//ESTÁ CACEESSANDO OS INDICES 0 E 3 
console.log(valores[4])// NÃO OCORRE ERRO COMO EM OUTRAS LINGUAGENS. AQUEI APENAS DÁ QUE O NÚMEOR E UNDFINED 


valores[4] = 10//MOSTRA TAMBÉM QUE HA ITENS ENTRE ELES 
console.log(valores)//
console.log(valores.length)//   

valores.push({id:3}, false, null,'teste')//PUSH ADICIONA ELEMENTOS AO ARRAY 
console.log(valores)//
//

console.log(valores.pop())//PEGA O ULTIMO VALOR DO ARRAY E VAI RETORNAR, AO RETORNAR O VALOR É RETIRADO DO ARRAY 
delete valores[0]//DELETA UM ELEMENTO DO ARRAY APARTIR DESSA FUNÇÃO DELETE 
console.log(valores)//


console.log(typeof valores)//MOSTRA O TIPO. O TIPO DO ARRAY É OJETC 