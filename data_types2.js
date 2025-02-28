const str = "JavaScript is fan"
console.log(str.includes("fan"))

const y = 0
if (!y) {
    console.log('y является ложным')
} else {
    console.log('y является правдивым')
}

const firstName = 'John';
const lastName = 'Doe';
const occupation = 'software developer';
const res = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`;
console.log(res)

const a = ""
const b = null
console.log(a === b) // false - разные типы пустых значений
console.log(a == b) // честно не поняла, вроде должно быть тру, а показывает фолз

const c = 1
const d = "1"
const result = c + d
console.log(result) /* вывелось 11, потому что переменная d - это string, 
                    поэтому переменная result выполнила конкатенацию строк */