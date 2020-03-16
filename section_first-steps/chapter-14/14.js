//https://learn.javascript.ru/function-basics

//task https://learn.javascript.ru/task/rewrite-function-question-or
const age = prompt('Enter your age', '');

function checkAge_1(age) {
    return age > 18 ? true : confirm ('Did your parents allow you?'); 
}

function checkAge_2(age) {
    return age > 18 || confirm ('Did your parents allow you?'); 
}

checkAge_1(age);
checkAge_2(age);


//task https://learn.javascript.ru/task/min
function min(x, y) {
    return x < y ? x : y;
}

alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));


//task https://learn.javascript.ru/task/pow
function pow(x, n) {
    let result = x;
    while (n > 1) {
        result *= x;
        n--;
    }

    return result;
}

let x = prompt('Enter x', '');
let n = prompt('Enter n', '');

if (!Number.isInteger(n) || n < 1) {
    alert(`n with value${n} is not supported.`);
} else {
    alert(pow(x, n));
}
