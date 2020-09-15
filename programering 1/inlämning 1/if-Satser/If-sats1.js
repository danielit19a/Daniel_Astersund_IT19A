let tal = 25

// avgöra om talet är jämnt eller udda
console.log(`${25%2}`)

// tal %2 är 0: jämnt 
// tal&2 är 1: udda

if (tal%2 === 0){
    console.log("jämnt")
} else {
    console.log("udda")
}

// låt användaren skriva in ett tal 
// 2. avgör om talet är positivt, 0 ellet nagativt 
let tal1 = prompt("ange ett tal: ")

if (tal1 > 0 ){
    console.log("positivt")
} else {
    console.log("negativt")
}
