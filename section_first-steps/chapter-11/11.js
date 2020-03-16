//https://learn.javascript.ru/logical-operators

//task https://learn.javascript.ru/task/check-if-in-range

// if(age >= 14 && age <= 90);

//task https://learn.javascript.ru/task/check-if-out-range

// if(!(age >=14 && age <= 90));
// if( age < 14 || age > 90);

//task https://learn.javascript.ru/task/if-question

// if (-1 || 0) alert( 'first' ); // (-1)  alert will be fulfilled
// if (-1 && 0) alert( 'second' ); // (0)  alert will not be fulfilled
// if (null || -1 && 1) alert( 'third' ); // (1) alert will be fulfilled

//task https://learn.javascript.ru/task/check-login

const login = prompt('What is your login?', '');

if (login === null) {
    alert('canceled');
} else if (login !== 'admin') {
    alert ('I do not know you')
} else {
    const password = prompt ('What is your password?', '');
    if (password === 'I am main') {
        alert ('hello!');
    } else if (password === null) {
        alert('canceled');
    } else {
        alert ('wrong password');        
    }
}