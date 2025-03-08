const number = [2, 3, 4]
for (let i in number) {
    number[i] = number[i] ** 2;
}
console.log(number)

const number2 = [1, 2, 2, 3, 4, 5, 5, 5, 6]
const getUnique = (number2) => {
    return number2.filter((el, ind) => ind === number2.indexOf(el));
};
console.log(getUnique(number2))

const number3 = [1, 2, 3]
const sum = number3.reduce((total, num) => total + num); 
console.log(sum)

const number4 = [1, 2, 3, 4, 5];
for (let i = 0, j = number4.length - 1; i < j; i++, j--)
    [number4[i], number4[j]] = [number4[j], number4[i]];
console.log(number4); 

let arr1 = ['banana', 'cherry' ]
const arr2 = ['cat', 'dog']

let newArr1Length = arr1.push('orange') // добавляем апельсин в конец списка
arr1.splice(0, 1) // удаляем банан
arr1 = ['lemon', 'pear'] //переопределяем массив
console.log(arr1)

const newArr2Length = arr2.push('hamster') // добавляем хомяка в конец списка
arr2.splice(0, 1) // удаляем кошку
arr2 = ['mouse', 'rat'] //const нельзя переопределить 
console.log(arr2)