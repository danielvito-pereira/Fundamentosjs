{ 
    { 
        { 
            { 
                var sera = 'sera???' // a variavel var que não seja uma function sera visivel fora do bloco. 
            } 
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 122//o escopo de está limitado a fução 
console .log(local)
}
teste()
