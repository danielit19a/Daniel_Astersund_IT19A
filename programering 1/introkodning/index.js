console.log("hej")

// skapar en variabel som heter name och tilldelar det värdet "Daniel"
let name = "Daniel" // sträng 
let age = 18 // heltal, int

console.log(`Hej ${name} du är ${age} år gammal `)

// if-sats - att göra val
if (age >= 18){
console.log("Du är vuxen")
}

// DOM - Document Object Model 
let text = document.querySelector("#text") 
text.innerHTML = `${name} är ${age} år gammal`