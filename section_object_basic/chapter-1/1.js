//https://learn.javascript.ru/object

//task https://learn.javascript.ru/task/hello-object
const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

console.log(user);

delete user.name;

console.log(user);


//task https://learn.javascript.ru/task/is-empty
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

alert(isEmpty(schedule));

schedule['8:30'] = 'get up';

alert(isEmpty(schedule));


//task https://learn.javascript.ru/task/sum-object
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function getTotalSum(startSum, salaries) {
    for (let key in salaries) {
        startSum += salaries[key];
    }

    return startSum;
}

console.log(`Total sum - ${getTotalSum(0, salaries)}`);

//task https://learn.javascript.ru/task/multiply-numeric
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiplyNumeric(menu);

console.log(menu);
