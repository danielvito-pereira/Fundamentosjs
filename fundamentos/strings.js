const escola = "cod3r"//o quarto indice da string é a letra r

console.log(escola.charAt(4))//sinifica que vai dar a letra que esta no indice 4 da string
console.log(escola.charAt(5))//dica de javaScript : java não dá muito erro como nesse exemplo 
console.log(escola.charCodeAt(3))// vai dar indicie 3 que corresponde ao número 3 . vai passar o valor associado a ele na table uni code 
console.log(escola.indexOf('3'))//vai retornar o numero 3 que é o indice 3 que está dentro de escola



console.log(escola.substring(1))//a partir do indice 1 ou seja vai passar = od3r
console.log(escola.substring(0, 3))// siguinifica que ele vai do indice 0 até o 3, sem incluir o indice 3 

console.log('Escola '.concat(escola).concat("!"))//a partir do valor literal foi unido 
console.log(escola.replace(/\d/, 'e'))//   /\d/  faz com que o valor da variavel seja substituida pela letra e ... o nome e regecs  

console.log('Ana, Maria, Pedro'.split(','))//Array é um agrupdor de variaveis que possiciona em uma lista com possisoes etc...aqui esotu convertendo string em array