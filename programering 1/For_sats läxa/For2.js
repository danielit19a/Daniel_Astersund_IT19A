console.log ("hej")
let P_jemnatal1 = document.querySelector("#jemnatal1")
let p_uddatal1 = document.querySelector("#uddatal1")
let p_lektioner = document.querySelector("#lektioner")
for (let i=1; i<=100; i++){
    
    P_jemnatal1.innerHTML += `${i} `
    i++
}
for (let y=2; y<=100; y++){
    p_uddatal1.innerHTML += `${y} `
    y++
} 
let name = ["Matematik", "Svenska", "Engelska", "Idrott", "Programering"]
p_lektioner.innerHTML = "Lektioner"
 

for (let k = 0; k< name.length; k++)  {
    p_lektioner.innerHTML += `<br> ${k+1}. ${name[k]} `
} 


