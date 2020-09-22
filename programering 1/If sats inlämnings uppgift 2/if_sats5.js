let vikt = prompt ("Hur mycket väger din handbaggage kg")
let längd = prompt ("längd på din handbaggage i cm")
let bredd = prompt ("bredden på din handbaggage i cm")
let höjd = prompt ("Höjden på din handbagge i cm")

if (vikt <= 8) {
    console.log ("Din vikt är godkänd på handbaggaget")
}else {
    console.log ("Din handbaggage är inte godkänd")
}
if (längd <= 55) {
    console.log ("Din längd är godkänt")
} else {
    console.log ("Din längd är inte godkänt")
}
if (bredd <= 40) {
    console.log ("Din bredd är godkänt")
}else {
    console.log ("Din bredd är inte godkänt")
}
if (höjd <= 23) {
    console.log ("Din höjd är godkänt")
}else {
    console.log ("Din höjd är inte godkänt")
}