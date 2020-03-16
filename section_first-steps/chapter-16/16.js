//https://learn.javascript.ru/arrow-functions-basics

//task https://learn.javascript.ru/task/rewrite-arrow
function ask (question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask('Are you agree?', () => alert('You agreed'), () => alert('You did not agree'));