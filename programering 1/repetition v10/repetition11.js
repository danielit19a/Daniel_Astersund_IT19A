console.log("Hej")

let namn = "Daniel"
let ålder = "18"
console.log(`Hej ${namn}, du är ${ålder} år gammal`)

// if-sats 
if (ålder >= 18){
    console.log("du är vuxen")
} else {
    console.log("Du är barn");
}

// för-sats - Skriva ut jämna tal mellan 0 och 19 
for (let i = 0; i< 20; i++){
    if (i % 2 == 0){
    console.log(i); 
    }
}
for (let i = 0; i < 5; i++) {
    console.log(i)
}

let tal = [3, 5, 8]
let summa = tal[1]+tal[0]
console.log(summa)

let frukter = ["kiwi", "äpple", "bannan", "jordgubbar"]
let godfrukt = frukter[2]
console.log(godfrukt)