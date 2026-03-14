const sequence = document.getElementById("password")
const btn = document.getElementById("button")

const password = 1234

btn.addEventListener("click", function(){

    do{
         const psswdInput  = Number(sequence.value); 
        alert("Try the 1234 password bellow")

    }while(psswdInput != password)


})