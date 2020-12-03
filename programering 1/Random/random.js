let slumptal = Math.random() 

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`coin flip ${coinflip}`)

/* utöka det här programmet sådant att 
en 0 skriver ut tails
en 1 skriver ut head
 */

// använd en if-sats

 if (coinflip==1) {
    console.log ("head")
} else {
    console.log ("tails")
}

// tärning 
// slå tärningen 100 gånger 
function rollDice() {
    return Math.floor(Math.random() * 6+1)
} 
for(let i = 0; i < 100; i++) console.log (rollDice())

