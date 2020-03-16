//https://learn.javascript.ru/switch

//task https://learn.javascript.ru/task/rewrite-switch-if-else
const browserName = prompt('Enter browser name.', '');

if (browserName === 'Edge') {
    alert('You have got the Edge!');
} else if (browserName === 'Chrome' 
    || browserName === 'Firefox' 
    || browserName === 'Safari' 
    || browserName === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

//task https://learn.javascript.ru/task/rewrite-if-switch
const number = +prompt('Enter a number between 0 and 3', '');

switch(number) {
    case 0: 
        alert('You entered 0');
        break;
    case 1:
        alert('You eneterd 1');
        break;
    case 2:
    case 3:
        alert('You enetred 2 or 3');
        break;
    default:
        alert('You not entered 0 or 1 or 2 or 3');
        break;
}