// Armazenando uma função em uma variavel 
const imprimmirSoma = function (a,b){ // aqui foi criado uma função anonima, que é uma função sem nome.
   
    console.log(a + b)
    
}      
 imprimmirSoma(2,3)

 // Armazenando uma função arrow em uma variavel 

 const soma = (a, b) => { // => é um simbolo usado para substituir o nome function ou seja é uma forma resumida de escrever function por isso o nome função arrow
    return a + b
 }

 console.log(soma(2, 3))


 // retorno implicito 

 const subtracao = (a, b) => a-b

 console.log(subtracao(2,3))