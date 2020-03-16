//https://learn.javascript.ru/ifelse

//task https://learn.javascript.ru/task/check-standard
const jsOfisialName = prompt('What is ofisial name of JavaScript?', '');

if (jsOfisialName === 'ECMAScript') {
    alert('You are right');
} else {
    alert('You do not know?! ECMAScript!');
}

//task https://learn.javascript.ru/task/sign
const userNumber = prompt('Enter number', '');
if (userNumber > 0) {
    alert(1);
} else if (userNumber < 0) {
    alert(-1);
} else {
    alert(0);
}

//task https://learn.javascript.ru/task/rewrite-if-question
const a = 1, b = 4;
let result = (a + b < 4) ? 'few' : 'many';

//task https://learn.javascript.ru/task/rewrite-if-else-question
let message;
//const login = 'employee';
const login = prompt('What is your login?', '');

message = (login == 'employee') 
		  ? 'hi' : (login == 'director') 
		  ? 'hello' : (login == '') 
          ? 'no login' : '';

alert(message);