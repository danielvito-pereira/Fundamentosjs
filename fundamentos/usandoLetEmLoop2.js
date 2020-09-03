const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//como let possui escopo de bloco os valores serão invocados normalmente 
funcs[8]()