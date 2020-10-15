let name = "Daniel"
function sayhello(){
    let age = 18
    console.log(`Hej ${name}`)
}

// anropar funktionen sayhello
sayhello()
sayhello()

function addera(tal1, tal2){
let summa = tal1+tal2
return summa 
}

console.log(`2+5=${addera(2,5)}`)

function subtrahera(tal1, tal2){
    let summa = tal1-tal2
    return summa 
}
console.log(`2-5=${subtrahera(2,5)}`)

function dividera(tal1, tal2){
    if (tal2 == 0){
        return "Får ej dela med 0"
    }
    let summa = tal1/tal2 
    return summa
}
console.log(`10/5=${dividera(10,5)}`)

function multiplikation(tal1, tal2){
    let summa = tal1*tal2
    return summa
}
console.log(`10*5=${multiplikation(10,5)}`)

function cirkelArea(radie){
let area = Math.PI*radie**2
return area
}

console.log(`Arean av en cirkel med radie 10 är ${cirkelArea(10)}`)
