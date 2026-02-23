
function toNumber(){
var string = "1590"
console.log("Initial data type: " + typeof string)
let stringToNumber = Number(string)

if(typeof stringToNumber == "number" ){
    console.log("The final data type is number! : " + typeof stringToNumber )
}else{
    console.log("Typeof cannot convert")
 }

// console.log(typeof + string) --> can be used as well
}

function toString(){
var number =  1590
console.log("Initial data type: " + typeof number)

let numberToString = String(number)
if(typeof numberToString == "string" ){
    console.log("The final data type is string! : " + typeof numberToString)
}else{
    console.log("Typeof cannot convert")
 }

}


function toBoolean(){
var number = 1590
console.log("Initial data type: " + typeof number)
let numberToBoolean = !isNaN(number)

if(typeof numberToBoolean == "boolean" ){
    console.log("The final data type is boolean! : " + typeof numberToBoolean)
}else{
    console.log("Typeof cannot convert")
 }


}

toNumber();
toString();
toBoolean();


