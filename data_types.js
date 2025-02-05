let someValue = 56; // number

console.log(typeof someValue)

const myName = "Liza"; // string

console.log(typeof myName)

const y = null; // null - object

console.log(typeof y); 

let number = 3; // это хранение данных по значению, потому что они смотрят в разные ячейки

let number2 = number;

console.log('number1', number)
console.log('number2', number2)

number2 = 523;

console.log('number1', number)
console.log('number2', number2)

/* это хранение данных по ссылке, т.к. при изменении значения в одной переменной, 
оно так же поменяется и у других связанных переменных */

const someObject = { 
    name: 'Liza'
}

const someObject2 = someObject

console.log('someObject', someObject)
console.log('someObject2', someObject2)

someObject2.name = 'lawrence'

console.log('someObject', someObject)
console.log('someObject2', someObject2)

someObject.name = 'hou'

console.log('someObject', someObject)
console.log('someObject2', someObject2)