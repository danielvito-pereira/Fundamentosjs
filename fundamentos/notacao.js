console.log(Math.ceil(6.1))//o metodo math.ceil aredonda pra cima 

const obj1 = {}
obj1.nome = 'bola'// cria dinamicamente o atributo dentro do objeto usando o objeto.nomedoobjeto.
// obj1['nome'] = 'bola 2' essa é outra maneira de criar 
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // nessa function estou dizendo que quem estanciar esse objeto será vizivel ou seja ele sera publica pra quem quiser estanciar 

}

const oj2 = new Obj('Cadeira')
