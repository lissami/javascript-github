const price = '100'

const price = '150'

console.log (price) // Выдает ошибку, потому что одинаковые переменные

let price2 = '100'

let price2 = '150'

console.log(price2) // Выдает ошибку, потому что одинаковые переменные 

if (true) { // Значение поменялось, потому что переменная находится в блоке
    let price2 = '150'
    console.log(price2)
}

if(true) { // Значение поменялось, потому что переменная находится в блоке
    const price = '150'
    console.log(price)
}

/* Закомментируйте ненужные строки кода, чтобы увидеть изменения */