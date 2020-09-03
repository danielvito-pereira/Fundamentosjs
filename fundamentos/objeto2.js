console.log(typeof Object)//função
console.log(typeof new Object())//nova função recebendo um objeto


const Cliente = function(){}//criei minha propria função
console.log(typeof Cliente)//criei a funcção cliente 
console.log(typeof new Cliente())// estanciei minha função 

class Produto{}//es 2015 (es6)
console.log(typeof Produto)
console.log(typeof new Produto())//objeto já está sendo estanciado