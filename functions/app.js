const number = document.getElementById("number")
const btn = document.getElementById("button")
const numberHtml = document.getElementById("result")

//ANONYMOUS FUNCTION
btn.addEventListener("click", function(){
    const numValue  = Number(number.value); 

    if(numValue % 2 === 0){
        numberHtml.innerHTML = (`${numValue} is even`)
        console.log(numValue + "is even")
    }else{
        numberHtml.innerHTML = (`${numValue} is odd`)
        console.log(numValue + "is odd")
    }


})




