console.log ("Hej")
let h1_titel = document.querySelector("#titel");
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")

// skriv while-sats i titel 
h1_titel.innerHTML = "while-sats"

let n = 1

while (n <=10){
    p_talserie1.innerHTML += `${n} `
    n++
}

// skriv ut 10,9,8,7,6,5,4,3,2,0....,-9,-10
let k = 10

while (k >=-10){
    p_talserie2.innerHTML += `${k} `
    k--
}


