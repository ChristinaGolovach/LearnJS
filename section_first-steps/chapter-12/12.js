//https://learn.javascript.ru/while-for

//task https://learn.javascript.ru/task/loop-last-value
//answer  - 1
let i = 3;

while (i) {
  alert( i-- );
} 

//task https://learn.javascript.ru/task/which-value-while
//answer 1, 2, 3, 4
i = 0;
while (++i < 5) alert( i );

//answer 1, 2, 3, 4, 5
i = 0;
while (i++ < 5) alert( i );

// //task https://learn.javascript.ru/task/which-value-for
//answer 0, 1, 2, 3, 4
for (let i = 0; i < 5; i++) alert( i );

// //answer 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i );

// //task https://learn.javascript.ru/task/for-even
for (let i = 2; i <= 10; i = i + 2) alert(i); 

//task https://learn.javascript.ru/task/replace-for-while
let i = 0;
while(i < 3) {
    alert(`number ${i}!`);
    i++;
}

//task https://learn.javascript.ru/task/repeat-until-correct
let userNumber; 

do {
    userNumber = prompt('Please, enter number is more than 100', '');
} while (userNumber <= 100 || userNumber === null);

//task https://learn.javascript.ru/task/list-primes
const n = 10;
for (let i = 2; i <= n; i++) {
    let divider = i-1;
    let dividerNumbers = 0;
    while (divider >= 2){
        if (i % divider === 0){
            dividerNumbers++;
        }
        divider--;
    }
    if (dividerNumbers === 0) {
        console.log(i);
    }
}
