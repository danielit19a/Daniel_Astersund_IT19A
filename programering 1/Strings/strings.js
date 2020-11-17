console.log("strings")

// Kontatenering

let fornamn = " Daniel "
let efternamn = "Astersund,"
let namn = fornamn + efternamn
let adress = "Kronhusgatan 9,"
let telefon = "112,"
let alder = " 18"


console.log(namn +"´\n" + adress +"\n" +telefon +"\n" +alder)

let p_uppgifter = document.querySelector("#personuppgifter")

p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress+ "<br>" +"Telefon: "+ telefon+ "<br>"+"Ålder: " + alder 

// indexsering
let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(` Bokstav på index 0 är: ${bokstav1} `)
console.log(` Bokstav på index 4 är: ${bokstav5} `)

// längden av en sträng
let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`)
/*
r

Räkna antalet ord i den här meningen: Jag läser IT-programmet på NTI kronhus i Göteborg.

*/

let mening = "Jag läser IT-programet på NTI kronhus i Göteborg"
let ord = mening.split(" ")
console.log(ord)
let antal_ord = ord.length
console.log(`Antal ord i meningen är ${antal_ord}`)
// slice 

// sökning 

// split 

// loopa över en lista
