//Função sem retorno 
//os parametros estão dentro de ()
function imprimirSoma(a, b){//função é a coisa mais importante em um codigo javaScript 
    console.log(a + b)
}

imprimirSoma(2, 3) //ele vai executar a soma por meio dessa função. 
imprimirSoma(2)//se for passado apenas um valor o segundo não passa será undefined 
imprimirSoma(2 , 10, 4, 5 ) // ela simpismente ingnora os números que foram colocados a mais 


// função com retorno

function soma (a, b = 0) {//nessa linha está determinado  que por padrão a variavel b é igual  a 0 . Ou seja caso um valor não seja passado sera considerado 0 como valor.
    return a + b;
}

console.log(soma(2,3))