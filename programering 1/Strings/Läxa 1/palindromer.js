let TextArea = document.querySelector("#Textarea") 
let Txt1 = document.querySelector("#Text1")
let Txt2 = document.querySelector("#Text2")
let BTN = document.querySelector("#BTN")
let Txt3 = document.querySelector("#Text3")

BTN.addEventListener("click",Palindrom)
function Palindrom(){
    let Text = TextArea.value
    console.log(Text)
    let letters = Text.split("")
    console.log(letters)
    let backlänges = letters.reverse();
    console.log(backlänges)  
    let Länka = backlänges.join("");
    console.log(Länka)  
    if (Text == Länka) {
        console.log("Det är en Palindrom")
            } else {
                console.log("Det är inte en Palindrom")
                Txt1.innerHTML += Text
                Txt2.innerHTML += Länka
               
            }
      
     
        
}


