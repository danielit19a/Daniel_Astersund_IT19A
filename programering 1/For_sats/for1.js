let p_talserie1 = document.querySelector("#talserie1")

let P_talserie2 = document.querySelector("#talserie2")
for (let i=1; i<=10; i++){
    p_talserie1.innerHTML += `${i} `
}
let P_summa = document.querySelector("#summa")
let summa = 0 

for (let j=10; j>0; j--){
    P_talserie2.innerHTML += `${j} `
}

console.log("Hej")
for (let i = 0; i<10; i++){
console.log(`${i}. I will not write all over the walls`)
}

// vill räkna ut summan 1+2+3...+8+9+10
for (let i=0; i<=10; i++){
    summa += i 
}
P_summa.innerHTML += `1 + 2 +3 +...+9+10 = ${summa}`
