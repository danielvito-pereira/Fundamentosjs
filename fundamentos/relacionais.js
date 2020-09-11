console.log(('01'),'1 '== 1) //está perguntando se os valores são iguais ingnorando os tipos
console.log(('02'),'1 '=== 1)//estaperguntando se os valores são exatamente iguais até no tipo
console.log(('03'),'3 '!= 3)//está perguntanod se os valores são diferentes ( ! ) ignorando o tipo
console.log(('04'),'3' !== 3)// está perguntando se os valores são diferentes mas sem ignorar os tipos


console.log(('01'),3 < 2)
console.log(('01'),3 > 2)
console.log(('01'),3 <= 2)
console.log(('01'),3 >= 2)

const d1= new Date(0)//data 0 para o java é o  dia de sua criação
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)