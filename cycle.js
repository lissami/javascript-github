for (let i = 1; i < 11; i++) {
    console.log(i);
} 

const y = " " // это пробел
console.log(y)

let res = 0;
let i = 1; 
while (i <= 100) {
	res = res + i;
    console.log(res);
    i++;
}

const z = " " // это пробел
console.log(z)

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  console.log(i); 
}


