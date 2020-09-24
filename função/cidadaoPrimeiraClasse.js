//Função em JS é Fist-Class Object ou (Citizens)
// Higher-order function
 

// criar de forma literal 
function fun1() { //ela pode receber parametros e pode retornar valores, o retorno é opcional 

}


// Armazenar em uma variavel
const fun2 = function() {}//essa função é um afunção anonima que está atribuidada a constante ou seja sempre que invocar a constante a função será invocada também

//Armazenar em um array 

const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))


// Armazenar em um atriuto de objeto
const objt = {}
objt.falar = function () {return 'Opa'}//pode criar um objeto e atriburi uma função 
console.log(objt.falar())


// Passar função como param
function run(fun) {
    fun()
}
run(function() {console.log('Executando...')})

// Um função pode retornar/ conter um função 
function soma(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)//outra maneira de acessar a função 
cincoMais(4)