const monthInput = document.getElementById("month");
const elseIfHtml = document.getElementById("elseIf");
const switchHtml = document.getElementById("switch");
const button = document.getElementById("button");
const gradeInput = document.getElementById("grades");
const gradeBtn = document.getElementById("gradesBtn");
const gradeHtml = document.getElementById("gradeResult")

var age;

do{
    age = prompt(`Type your age:`);
    age = Number(age)

    if(isNaN(age) || age <= 0 ){
        alert("Type a valid age")
    }

}while(isNaN(age) || age <= 0)


if( age <= 12){
    elseIf.innerHTML = (`You're a child`);
    console.log("You're a child")
}else if(age <= 17){
     elseIf.innerHTML = (`You're a teenager `);
     console.log("You're a teenager ")
}else if(age >= 18){
     elseIf.innerHTML = (`you're an adult`);
     console.log("you're an adult")
}else{
     elseIf.innerHTML = (`You're an elderly`);
     console.log("You're an elderly")
}


button.addEventListener("click", function() {
const month = Number(monthInput.value)

if(month < 1 || month > 12){
    alert("The month must be between 1 and 12")
}else{
    var monthName = "";

    switch(month){
        case 1:
            monthName = ("January")
            console.log = "January"
            break;
            case 2:
            monthName = (`February`)
             console.log = "February"
            break;
            case 3:
            monthName = (`March`)
            console.log = "March"
            break;
            case 4:
            monthName = (`April`)
            console.log = "April"
            break;
            case 5:
            monthName = (`May`)
            console.log = "May"
            break;
            case 6:
            monthName = (`June`)
            console.log = "June"
            break;
            case 7:
            monthName = (`July`)
            console.log = "July"
            break;
            case 8:
            monthName = (`August`)
            console.log = "August"
            break;
            case 9:
            monthName = (`September`)
            console.log = "September"
            break;
            case 10:
            monthName = (`October`)
            console.log = "October"
            break;
            case 11:
            monthName = (`November`)
            console.log = "November"
            break;
            case 12:
            monthName = (`December`)
            console.log = "December"
            break;


    }

    switchHtml.innerHTML = monthName;
}

})


gradeBtn.addEventListener("click", function(){

    const grade = Number(gradeInput.value)

    if(grade < 0 || grade > 10){
    alert("The grade must be between 0 and 10")}

    if(grade >= 9){
        gradeHtml.innerHTML = ("Excellent")
    }else if(grade >= 7){
        gradeHtml.innerHTML = ("Good")
    }else if(grade >= 5){
        gradeHtml.innerHTML = ("Regular")
    }else{
        gradeHtml.innerHTML = ("Failed")
    }

})