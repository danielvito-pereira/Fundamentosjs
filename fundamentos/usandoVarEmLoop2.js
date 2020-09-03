var funcs = []

for (var i =0; i< 10; i++) {
    funcs.push(function(){//adiciona a funcção no arrai 
        console.log(i)
    })
}

funcs[2]()//invocando o valor do indice 2
funcs[8]()//invocando o valor do indice 8

//por não ter escopo var vai substitur os valores 