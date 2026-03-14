//REDUCE
let numbersReduce = [1, 2, 3, 4, 5]
let adittion = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log("Total: " + adittion)

//SORT
let numbersOrdenation = [79, 20, 81, 2, 5]
numbersOrdenation.sort((a, b) => a - b)
//REVERSE
numbersOrdenation.reverse()
console.log(numbersOrdenation)