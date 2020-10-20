let p_siffra = document.querySelector("#siffra");
let upp = document.querySelector("#uppknapp");
let ned = document.querySelector("#nedknapp");
let reset = document.querySelector("#resetknapp");
let p_tecken = document.querySelector("#tecken");
let siffra = 0;
p_siffra.innerHTML = siffra;
p_tecken.innerHTML = "Noll";

upp.addEventListener("click", raknaUpp);
ned.addEventListener("click", raknaNed);
reset.addEventListener("click", resetNummer);
function raknaUpp() {
    console.log("Räkna upp knapp tryckt")
// Öka värdet på siffra 
siffra = siffra + 1;
console.log(siffra); 
// skriva ut den i P_siffra 
p_siffra.innerHTML = siffra;
teckenCheck();
}

// Skapa funktion för att räkna ned
function raknaNed(){
    siffra = siffra - 1 
    p_siffra.innerHTML = siffra;
    teckenCheck();
}

//Skapa funktion för att nollställa 
function resetNummer() {
    siffra = 0
    p_siffra.innerHTML=0
    teckenCheck();
}
function teckenCheck(){
    if(siffra < 0) {
p_tecken.innerHTML = "Negativt";
p_siffra.style.color = "black";
    } else if (siffra > 0) {
        p_tecken.innerHTML = "Positivt";
        p_siffra.style.color = "green";
    }
     else {
        p_tecken.innerHTML = "Noll";
        p_siffra.style.color = "blue";
    }
}